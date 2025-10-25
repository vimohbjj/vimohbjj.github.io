import React from 'react'
import { DiGit } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiLaravel } from 'react-icons/di';
import perfil from '../img/perfil.jpg';

 const Profile = () => {
  return (
    <article className='text-white bg-color-dark grid grid-cols-4 items-center gap-6 p-4'> 
        <div className='col-span-6 md:col-span-1 text-center'>
            <img className='w-72 rounded-xl' src={perfil} alt="myimage" />
        </div>
        <div className='col-span-6 md:col-span-3 flex flex-col gap-4 m-2'>
            <p>
              <span className='text-red-600 pe-2'>{'<span>'}</span>  
              Hi, I'm Vicenzo!
              <span className='text-red-600 ps-2'>{'</span>'}</span>  
            </p>
            <h2 className='text-3xl text-white'>
                Junior
                <span className='text-green-900 ps-2 pe-2'>
                    {'{Backend}'}
                </span>
                Software Developer
            </h2>
            <p className='text-gray-400'> 
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
                <span className='flex flex-row text-2xl'>
                    <DiReact />
                    <DiJava />
                    <DiLaravel />
                    <DiJavascript1 />
                    <DiGit />
                </span>
                <span className='text-gray-400'>
                ... and more
                </span>
            </p>
        </div>
    </article>
  )
}

export default Profile