import React from 'react'
import { DiGit } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiLaravel } from 'react-icons/di';
import perfil from '../img/perfil.jpg';

 const Profile = () => {
  return (
    <section className='text-white bg-color-dark grid grid-cols-5 items-center align-middle gap-6 p-4'> 
        <article className='col-span-3 md:col-span-2 flex justify-center items-center text-center'>
            <img className='w-52 md:w-72 rounded-xl mx-auto' src={perfil} alt="myimage" />
        </article>
        <article className='col-span-5 md:col-span-3 flex flex-col gap-4 m-2'>
            <p className='text-sm sm:text-base'>
              <span className='text-red-600 pe-2'>{'<span>'}</span>  
              Hi, I'm Vicenzo!
              <span className='text-red-600 ps-2'>{'</span>'}</span>  
            </p>
            <h2 className='text-white text-md sm:text-2xl md:text-3xl'>
                Junior
                <span className='text-green-900 ps-2 pe-2'>
                    {'{Backend}'}
                </span>
                Software Developer
            </h2>
            <p className='text-gray-400 text-sm md:text-base'> 
                <span className='text-red-600 pe-2'>{'<p>'}</span>
                    Expertise in technologies such as 

                    <span className='text-red-600 ps-1'>
                    React, SQL,
                    Laravel, Java, Javascrip
                    </span> and 

                    <span className='text-red-600 ps-1'>Tailwind</span>

                    ... I deliver both innovative and robust web solutions.
                <span className='text-red-600'>{'<p>'}</span>
            </p>
            <p className='flex flex-row items-center'>
                <span className='flex flex-row text-xl sm:text-2xl'>
                    <DiReact />
                    <DiJava />
                    <DiLaravel />
                    <DiJavascript1 />
                    <DiGit />
                </span>
                <span className='text-gray-400 text-base sm:text-md'>
                ... and more
                </span>
            </p>
        </article>
    </section>
  )
}

export default Profile