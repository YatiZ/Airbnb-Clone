'use client'
import useAddPropertyModal from '@/app/hooks/usePropertyModal'
import React, { useState } from 'react'

const AddPropertyButton = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const addProperty = useAddPropertyModal();
  return (
    <div className='p-2 text-sm font-semibold rounded-full hover:bg-gray-300 cursor-pointer'>
      <button onClick={()=>{
        // setIsOpen(!isOpen) 
        console.log('hello')
        addProperty.open()
        }}>AddProperty</button>
    </div>
  )
}

export default AddPropertyButton