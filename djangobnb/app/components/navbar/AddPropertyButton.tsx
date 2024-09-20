'use client'
import useLoginModal from '@/app/hooks/useLoginModal';
import useAddPropertyModal from '@/app/hooks/usePropertyModal'
import React, { useState } from 'react'

export interface addPropertyButtonProps{
  userId: string;
}
const AddPropertyButton:React.FC<addPropertyButtonProps> = ({userId}) => {
   const loginModal = useLoginModal();
  const addProperty = useAddPropertyModal();

  const yourAirbnbHome = ()=>{
    if(userId){
      addProperty.open();
    }else{
      loginModal.open();
    }
  }
  return (
    <div onClick={yourAirbnbHome} className='p-2 text-sm font-semibold rounded-full hover:bg-gray-300 cursor-pointer'>
      AddProperty
    </div>
  )
}

export default AddPropertyButton