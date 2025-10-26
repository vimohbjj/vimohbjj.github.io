import React from 'react'
import { RiComputerLine } from 'react-icons/ri';
import { TbSql } from 'react-icons/tb';
import { MdApi } from 'react-icons/md';
import { FaCode } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { TbSettings } from 'react-icons/tb';


export const Services = () => {
  return (
    <section className='bg-color-dark border-2 border-color-gray p-5 text-white flex flex-col justify-center gap-5'>
        <article className='text-center'>
            <h3 className='text-green-800'>What do I offer</h3>
            <h2 className='text:lg sm:text-xl md:text-2xl'>Personalized solutions for specific requirements</h2>
        </article>
        <article className='grid grid-cols-6 gap-5'>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <RiComputerLine className='text-2xl' />
                <h3 className='text-base sm:text-xl'>Web & App Development</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus voluptates eaque quos unde quam natus, 
                    .sequi nobis ab cupiditate reprehenderit deleniti debitis aperiam
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <TbSql className='text-2xl' />
                <h3 className='text-base sm:text-xl'>Database Management</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus voluptates eaque quos unde quam natus, 
                    .sequi nobis ab cupiditate reprehenderit deleniti debitis aperiam
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <MdApi className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>API REST Development</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus voluptates eaque quos unde quam natus, 
                    .sequi nobis ab cupiditate reprehenderit deleniti debitis aperiam
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <FaCode className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>Robust solutions</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus voluptates eaque quos unde quam natus, 
                    .sequi nobis ab cupiditate reprehenderit deleniti debitis aperiam
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <FiShoppingCart className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>Ecommerce solutions</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus voluptates eaque quos unde quam natus, 
                    .sequi nobis ab cupiditate reprehenderit deleniti debitis aperiam
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <TbSettings className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>Technical Consulting & Optimization</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Expert analysis and optimization of your existing systems. I provide technical guidance, 
                    performance improvements, code reviews, and strategic planning to enhance your digital 
                    infrastructure and ensure long-term scalability.
                </p>
            </div>
        </article>
        <p className='text-gray-500 text-center text-sm'>
            Excited to take on new projects and collaborate, lets 
            talk about your ideas.
            <a className='color-light-green' href="/">Reach out</a>
        </p>
    </section>
  )
}

export default Services