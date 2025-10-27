import React from 'react'
import { FaReact } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { FaHtml5 } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql } from 'react-icons/si';
import { AiOutlineDotNet } from 'react-icons/ai';
import { BiLogoTailwindCss } from 'react-icons/bi';

export const Skills = () => {
  return (
    <section className='text-white bg-color-dark grid grid-cols-4 gap-3 p-4 border-2 border-color-gray'>
        <article className='col-span-4'>
            <h2 className='text-center text:lg sm:text-xl md:text-2xl text-green-700'>My skills</h2>
        </article>
        <article className='col-span-4 md:col-span-2 flex flex-col justify-evenly bg-color-ligth-dark p-4 m-3 rounded-lg border-2 border-color-gray'>
            <div className='flex flex-row justify-evenly items-center gap-5'>
                <FaPhp className='text-5xl sm:text-6xl text-purple-800'/>
                <FaLaravel className='text-4xl sm:text-5xl text-red-600'/>
                <SiMysql className='text-4xl sm:text-5xl'/>
                <AiOutlineDotNet className='text-4xl sm:text-6xl text-purple-500'/>
            </div>
            <div className='flex flex-row justify-evenly items-center gap-5'>
                <FaReact className='text-4xl sm:text-5xl text-blue-500'/>
                <FaGitAlt className='text-4xl sm:text-5xl text-red-600'/>
                <FaHtml5 className='text-4xl sm:text-5xl text-orange-700'/>
                <IoLogoJavascript className='text-4xl sm:text-5xl text-yellow-300'/>
                <BiLogoTailwindCss className='text-4xl sm:text-5xl text-blue-500'/>
            </div>
        </article>
        <article className='col-span-4 md:col-span-2 bg-color-ligth-dark p-4 m-3 rounded-lg border-2 border-color-gray'>
            <ul className='custom-bullets list-disc list-inside flex flex-col gap-4'>
                <li><strong>Front-End:</strong> Html, CSS, JavaScript, React, Tailwind, Bootstrap</li>
                <li><strong>Back-End:</strong> Laravel, .NET, Java, SQL, PHP </li>
                <li><strong>Tools:</strong>  Git, Trello, Kanban</li>
                <li><strong>Others:</strong> RESTful APIs, Scrum, Data structures & Algorithms</li>
            </ul>
        </article>
    </section>
  )
}

export default Skills