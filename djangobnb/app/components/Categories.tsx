import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12' >
        <div className="pb-4 fle  flex-col items-center space-y-2 border-b-2 border-white hover:opacity-100 hover:border-gray-200 opacity-60">
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Beach</span>
        </div>

        <div className="pb-4 fle  flex-col items-center space-y-2 border-b-2 border-white hover:opacity-100 hover:border-gray-200 opacity-60">
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Beach</span>
        </div>

        <div className="pb-4 fle  flex-col items-center space-y-2 border-b-2 border-white hover:opacity-100 hover:border-gray-200 opacity-60">
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Beach</span>
        </div>

        <div className="pb-4 fle  flex-col items-center space-y-2 border-b-2 border-white hover:opacity-100 hover:border-gray-200 opacity-60">
           <Image src='/icn_category_beach.jpeg' alt='Category icon beach' width={20} height={20}/>
           <span className="text-xs">Beach</span>
        </div>
    </div>
  )
}

export default Categories