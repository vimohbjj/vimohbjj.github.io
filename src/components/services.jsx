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
                    I build responsive, high-performance web applications using modern frameworks like React and Laravel. 
                    From dynamic single-page applications to complex enterprise systems, 
                    I create seamless user experiences with clean, maintainable code and optimized performance.
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <TbSql className='text-2xl' />
                <h3 className='text-base sm:text-xl'>Database Management</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Expert in designing and optimizing database systems with SQL and NoSQL technologies. I create efficient data models, write complex queries, 
                    and implement caching strategies to ensure fast data retrieval and secure data storage for applications of any scale.
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <MdApi className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>API REST Development</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Design and implementation of RESTful APIs with comprehensive documentation, authentication systems, and rate limiting. 
                    I create intuitive endpoints that enable seamless integration between frontend applications and backend services.
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <FaCode className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>Robust solutions</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Scalable backend systems using Laravel, Node.js, and Java.
                    I develop solutions that handle growing user demands while maintaining performance and security.
                </p>
            </div>
            <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-2 rounded-xl border-2 border-color-gray p-3 m-2'>
                <FiShoppingCart className='text-2xl'/>
                <h3 className='text-base sm:text-xl'>Online Store Solutions</h3>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Turn-key ecommerce platforms designed to drive sales and growth. From product display 
                    to secure checkout, I create seamless shopping experiences with analytics, customer 
                    management, and mobile-optimized designs that increase conversion rates.
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
        </p>
    </section>
  )
}

export default Services