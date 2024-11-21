"use client"
import React from 'react'
import Image from 'next/image'
import apiService from '../services/apiService'
import Link from 'next/link'


const MyReservationPage = async() => {
    const reservations = await apiService.get('/api/auth/myreservations/');

  console.log('Reservations', reservations)
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="pt-6 pb-2">
            <h1 className='text-2xl mt-6 mb-2'>MyReservationPage</h1>

            <div className="space-y-4">
                {reservations.map((reservation: any)=>{
                    return(
                        <div key={reservation.id} className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl border rounded-xl">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image alt='beach' src={reservation.property.image_url} fill className='hover:scale-110 object-cover transition h-full w-full'/>
                            </div>
                        </div>
    
                        <div className="col-span-1 md:col-span-3">
                            <h2 className="mb-4 text-xl">{reservation.property.title}</h2>
    
                            <p className='mb-2'><strong>Check in date:</strong> {reservation.start_date}</p>
                            <p className='mb-2'><strong>Check out date:</strong> {reservation.end_date}</p>
                            <p className='mb-2'><strong>Number of nights:</strong> {reservation.number_of_nights}</p>
                            <p className='mb-2'><strong>Total price:</strong> ${reservation.total_price}</p>
                        
                        <Link href={`/properties/${reservation.property.id}`}>
                        <div 
                            
                            className="mt-6 cursor-pointer py-4 px-6 inline-block bg-airbnb text-white rounded-xl">Go to property</div>
                        </Link>
    
                        </div>
                    </div>
                    )
                })}
               
            </div>
{/* 
            <div className="space-y-4">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl border rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image alt='beach' src='/beach_1.jpg' fill className='hover:scale-110 object-cover transition h-full w-full'/>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>

                        <p className='mb-2'><strong>Check in date:</strong> 12/2/2024</p>
                        <p className='mb-2'><strong>Check out date:</strong> 15/2/2024</p>
                        <p className='mb-2'><strong>Number of nights:</strong> 2</p>
                        <p className='mb-2'><strong>Total price:</strong> $200</p>

                        <div className="mt-6 cursor-pointer py-4 px-6 inline-block bg-airbnb text-white rounded-xl">Go to property</div>
                    </div>
                </div>
            </div> */}
        </div>
    </main>
  )
}

export default MyReservationPage