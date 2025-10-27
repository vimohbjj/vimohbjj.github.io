import React from 'react'
import { RiGraduationCapFill } from 'react-icons/ri';
export const Education = () => {
  return (
    <section className='text-white bg-color-dark flex flex-col sm:flex-row justify-evenly gap-4 border-2 border-color-gray p-9'>
        <article className='flex items-center gap-4'>
            <RiGraduationCapFill className='text-xl sm:text-2xl text-green-700'/>
            <h2 className='text-xl sm:text-2xl text-green-700'>Education</h2>
        </article>
        <article className=''>
            <ul className='custom-bullets list-disc list-inside flex flex-col gap-5'>
                <div className='flex flex-col justify-items-start'>
                    <div className='flex'>
                        <li className='list-item flex-col gap-3'></li>
                        <a className='text-base sm:text-md hover:text-green-600' href="https://fi.ort.edu.uy/analista-en-tecnologias-de-la-informacion">
                        Information of Technology Analyst: 2023-present
                        </a>
                    </div>
                    <div className='text-gray-500 ps-6'><i>Tertiary Degree at University of Engineering ORT</i></div>
                </div> 
                <div className='flex flex-col justify-items-start'>
                    <div className='flex'>
                        <li className='list-item flex-col gap-3'></li>
                        <a className='text-base sm:text-md hover:text-green-600' href="https://fi.ort.edu.uy/analista-programador?utm_source=google&utm_medium=cpc&utm_campaign=SEARCH_2407_AP_Analista-programador&utm_adgroup=AP_Analista-Programador&utm_content=AP&utm_term=analista%20programador%20ort&matchtype=b&campaignid=21463381412&adgroupid=161977188862&creativeid=715452643406&device=c&network=g&placement=&loc_physical_ms=9222317&loc_interest_ms=&gad_source=1&gad_campaignid=21463381412&gclid=CjwKCAjwx-zHBhBhEiwA7Kjq635800gUzIg-qQtl2wHUZ96zbxPsYrjWDjkwiNqUsys3I4nghS-WZRoCD68QAvD_BwE">Programmer Analyst: 2023-present</a>
                    </div>
                    <div className='text-gray-500 ps-6'><i>Associate's degree at University of Engineering ORT</i></div>
                </div> 
                <div className='flex flex-col justify-items-start'>
                    <div className='flex'>
                        <li className='list-item flex-col gap-3'></li>
                        <a className='text-base sm:text-md hover:text-green-600' href="https://fi.ort.edu.uy/analista-programador?utm_source=google&utm_medium=cpc&utm_campaign=SEARCH_2407_AP_Analista-programador&utm_adgroup=AP_Analista-Programador&utm_content=AP&utm_term=analista%20programador%20ort&matchtype=b&campaignid=21463381412&adgroupid=161977188862&creativeid=715452643406&device=c&network=g&placement=&loc_physical_ms=9222317&loc_interest_ms=&gad_source=1&gad_campaignid=21463381412&gclid=CjwKCAjwx-zHBhBhEiwA7Kjq635800gUzIg-qQtl2wHUZ96zbxPsYrjWDjkwiNqUsys3I4nghS-WZRoCD68QAvD_BwE">Web Developer: 2023-present</a>
                    </div>
                    <div className='text-gray-500 ps-6'><i>Intermediate degree at University of Engineering ORT</i></div>
                </div>
                <div className='flex flex-col justify-items-start'>
                    <div className='flex'>
                        <li className='list-item flex-col gap-3'></li>
                        <a className='text-base sm:text-md hover:text-green-600' href="https://eduterciaria.utu.edu.uy/2024/06/18/tecnologo-en-informatica">Information of Technology Analyst: 2023-2025</a>
                    </div>
                    <div className='text-gray-500 ps-6'><i>Technical Degree with specialization in computer science at School of Computer Science UTU</i></div>
                </div>
                <div className='flex flex-col justify-items-start'>
                    <div className='flex'>
                        <li className='list-item flex-col gap-3'></li>
                        <div className='text-base sm:text-md hover:text-green-600'>High School Diploma: 2017-2022</div>
                    </div>
                    <div className='text-gray-500 ps-6'><i>Dr. Papu Acosta Estape</i></div>
                </div>
            </ul>
        </article>
    </section>
  )
}

export default Education
