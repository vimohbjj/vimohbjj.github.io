import React from 'react'
import { MdEmail } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';
export const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row justify-evenly items-center border-2 border-color-gray gap-2 p-5 text-white text-[13px] bg-color-dark border-t-green-800 '>
        <span className='flex gap-2 justify-center items-center'><FaPhoneFlip className='text-md'/>{'(+598)'} 097 778 146</span>
        <span className='flex gap-2 justify-center items-center'><MdEmail className='text-lg'/>monetavicenzo@gmail.com</span>
    </footer>
  )
}

export default Footer