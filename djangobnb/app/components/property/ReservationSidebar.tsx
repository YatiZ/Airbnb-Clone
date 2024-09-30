'use client'

import { Range } from "react-date-range";
import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";

export type Property={
    id: string;
    price_per_night: number;
}

interface ReservationSidebarProps{
    userId: string | null,
    property: Property
}
const ReservationSidebar: React.FC<ReservationSidebarProps> = ({property}) => {
  return (
    <aside className='mt-4 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl'>
        <h2 className="mb-5 text-2xl">${property.price_per_night} per night</h2>

        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
            <label htmlFor="" className='mb-1 block font-bold text-sm'>Guests</label>
            <select className='w-full -m-1 text-sm'>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>
        </div>

        <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">Book</div>

        <div className="mb-4 flex justify-between align-center">
            <p>$200 * 4 nights</p>

            <p>$800</p>
        </div>

        <div className="mb-4 flex justify-between align-center">
            <p>Djangobnb fees</p>

            <p>$800</p>
        </div>

        <hr />
        <div className="mb-4 flex justify-between align-center">
            <p>Total</p>

            <p>$800</p>
        </div>
    </aside>
  )
}

export default ReservationSidebar