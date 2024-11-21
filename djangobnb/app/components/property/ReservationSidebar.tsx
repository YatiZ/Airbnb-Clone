"use client";

import { Range } from "react-date-range";
import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useEffect, useState } from "react";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import DatePicker from "../forms/Calendar";
import { useRouter } from "next/navigation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export type Property = {
  id: string;
  price_per_night: number;
  guests: number;
};

interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}
const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
  userId,
}) => {
  const loginModal = useLoginModal();

  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [bookingStatus, setBookingStatus] = useState('');
  const router = useRouter();
  const guestsRange = Array.from(
    { length: property.guests },
    (_, index) => index + 1
  );

  //for booking system
  const performBooking = async () => {
    console.log('PerformBooking',userId)
    if (userId) {
      if (dateRange.startDate && dateRange.endDate) {
        const formData = new FormData();
        formData.append("guests", guests);
        formData.append(
          "start_date",
          format(dateRange.startDate, "yyyy-MM-dd")
        );
        formData.append(
            "end_date",
            format(dateRange.endDate,'yyyy-MM-dd')
        );
        formData.append('number_of_nights',nights.toString());
        formData.append('total_price',totalPrice.toString());

        const response = await apiService.post(`/api/properties/${property.id}/book/`, formData);

        if(response.success){
            console.log('Booking Sucessful');
            setBookingStatus('Success');
            router.push('/');
            
        }else{
            console.log('Something')
            setBookingStatus('Failed')
        }
      }
    } else {
      loginModal.open();
    }
  };
  
  //getting reservation
  const getReservations =async () => {
    const reservations = await apiService.get(`/api/properties/${property.id}/reservations/`)

    let dates: Date[] = [];
    reservations.forEach((reservation:any)=>{
      const range = eachDayOfInterval({
        start: new Date(reservation.start_date),
        end: new Date(reservation.end_date)
      });

      dates = [...dates, ...range];
    })

    setBookedDates(dates);
  }

  //for date selection for booking
  const _setDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1); //date must be at least two days
    }

    setDateRange({
      ...dateRange,
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };
  //calculation of total price anf fees
  useEffect(() => {
    getReservations();
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && property.price_per_night) {
        const _fee = ((dayCount * property.price_per_night) / 100) * 5;
        setFee(_fee);
        setTotalPrice(dayCount * property.price_per_night + _fee);
        setNights(dayCount);
      } else {
        const _fee = (property.price_per_night / 100) * 5;

        setFee(_fee);
        setTotalPrice(property.price_per_night + _fee);
      }
    }
  }, [dateRange]);

  return (
    <aside className="mt-4 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <div className="">
      {bookingStatus === 'success' && <p>Booking was successful!</p>}
      {bookingStatus === 'failed' && <p>Booking failed. Please try again.</p>}
      {bookingStatus === 'error' && <p>An error occurred during booking.</p>}
      </div>
     <h2 className="mb-5 text-2xl">${property.price_per_night} per night</h2>
   
      <DatePicker
        value={dateRange}
        bookedDates={bookedDates}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="" className="mb-1 block font-bold text-sm">
          Guests
        </label>
        <select
          className="w-full -m-1 text-sm"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        >
          {guestsRange.map((number) => (
            <option value={number}>{number}</option>
          ))}
        </select>
      </div>

      <div 
      onClick={performBooking}
      className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
        Book
      </div>

      <div className="mb-4 flex justify-between align-center">
        <p>
          ${property.price_per_night} * {nights} nights
        </p>

        <p>${property.price_per_night * nights}</p>
      </div>

      <div className="mb-4 flex justify-between align-center">
        <p>Djangobnb fees</p>

        <p>${fee}</p>
      </div>

      <hr />
      <div className="mb-4 flex justify-between align-center">
        <p>Total</p>

        <p>${totalPrice}</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
