import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton:React.FC<CustomButtonProps> = ({label, onClick, className}) => {
  return (
    <div onClick={onClick} className={`${className} text-center w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl cursor-pointer transition`}>
        {label}
    </div>
  )
}

export default CustomButton