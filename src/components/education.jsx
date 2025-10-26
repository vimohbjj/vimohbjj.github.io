import React from 'react'
import { RiGraduationCapFill } from 'react-icons/ri';
export const Education = () => {
  return (
    <section className='text-white bg-color-dark border-2 border-color-gray p-4'>
        <RiGraduationCapFill className='text-xl sm:text-2xl text-green-700'/>
        <h2 className='text-xl sm:text-2xl text-green-700'>Education</h2>
        <article className=''>
            <ul className='custom-bullets list-disc list-inside flex flex-col gap-4'>    
                <li className='list-item'>
                    <div className='flex flex-col'>
                        <span className='text-base sm:text-md'>Information of Technology Analyst: 2023-present</span>
                        <span><i>University of Engineering ORT</i></span>
                    </div>
                </li>  
                <li className='list-item flex flex-col'>
                    <span className='text-base sm:text-md'>Programmer Analyst: 2023-present</span>
                    <span><i>University of Engineering ORT</i></span>
                </li>
                <li className='list-item flex-col'>
                    <span className='text-base sm:text-md'>Web Developer: 2023-2025</span>
                    <span><i>University of Engineering ORT</i></span>
                </li>
                <li className='list-item flex flex-col'>
                    <span className='text-base sm:text-md'>Information of Technology Analyst: 2023-2025</span>
                    <span><i>School of Computer Science UTU</i></span>
                </li>
                <li className='list-item flex flex-col'>
                    <span className='text-base sm:text-md'>High School Diploma: 2017-2022</span>
                    <span><i>Dr. Papu Acosta Estape</i></span>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default Education
