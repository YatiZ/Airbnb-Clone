import React from 'react'
import Image from 'next/image'
import ReservationSidebar from '@/app/components/property/ReservationSidebar'


const PropertyDetailPage = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
        <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
            <Image fill src='/beach_1.jpg' className='object-cover w-full h-full' alt='beach house'/>
        </div>

        <div className=" grid gird-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 col-span-3">
                <h1 className='mb-4 text-4xl'>Property name</h1>

                <span className="mb-6 block text-lg text-gray-600">
                    4 guests -2 bedrooms -1 bathroom
                </span>

                <hr />

                <div className="py-6 flex items-center space-x-4">
                    <Image src='/profile_pic_1.jpg' alt='The user name' width={50} height={50} className='rounded-full'/>
                    <p><strong>John Doe</strong> is your host</p>
                </div>

                <hr />

                <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente expedita quaerat est quisquam odit adipisci omnis veritatis corporis? Ipsa optio labore quia vero suscipit odio voluptate maiores soluta harum?

                </p>
            </div>

            <ReservationSidebar />
        </div>
    </main>
  )
}

export default PropertyDetailPage