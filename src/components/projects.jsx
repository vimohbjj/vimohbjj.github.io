import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { FaHtml5 } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import gym from '../img/gym.jpg';
import construccion from '../img/Construccion.jpg';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaLaravel } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';

export const Projects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <section id='projects' className='text-white bg-color-dark p-10 border-2 border-color-gray' >
        <h2 className='text-center text-md sm:text-lg md:text-2xl text-green-600 mb-3'>Projects</h2>
        <Slider {...settings} className='sm:p-8'>
            <article className='px-4 mt-4'>
                <div className='flex flex-col xl:flex-row justify-evenly items-center gap-9'>
                    <div className='flex flex-col gap-6 border-2 border-color-gray p-4 rounded-lg'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-md sm:text-lg md:text-xl lg:2xl flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2'>
                                <span className='text-red-600 ps-2'>{'<h3>'}</span>
                                <span className='m-2 sm:ms-0'>Housing association management system</span>
                                <span className='text-red-600 ='>{'</h3>'}</span>
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                                <span className='text-red-600 ps-2'>{'<h4>'}</span>
                                <strong className='m-2 sm:ms-0'>Full stack developer</strong> 
                                <span className='text-red-600 ps-2'>{'</h4>'}</span>
                            </p>
                            <p className="text-gray-300 text-sm flex flex-col gap-2 w-10/12">
                                <span className='text-red-600 ps-2'>{'<p>'}</span>
                                <span className='m-2 sm:ms-4'>
                                    The system allows members to register work hours, upload payment receipts, and track their housing assignments, 
                                    while administrators can approve registrations, validate payments, manage assemblies, 
                                    and oversee construction stages. Built with PHP/Laravel for the backend, MySQL for data storage, 
                                    and HTML/CSS/JavaScript for the frontend, 
                                    the platform runs on Rocky Linux servers and features separate interfaces for members and administrators.
                                </span>
                                <span className='text-red-600 ps-2'>{'</p>'}</span>
                            </p>
                            <p className='text-gray-300 text-sm flex flex-col sm:flex-row gap-2'>
                                <span className='text-red-600 ps-2'>{'<span>'}</span>
                                Completion time: 8 months
                                <span className='text-red-600 ps-2'>{'</span>'}</span>
                            </p>
                        </div>
                        <div className='flex flex-row justify-between text-2xl sm:text-3xl'>
                            <div className='flex gap-2 sm:gap-4 ms-2'>
                                <FaLaravel className='text-red-600'/>
                                <FaGitAlt className='text-red-600'/>
                                <FaBootstrap className='text-purple-500'/>
                                <FaHtml5 className='text-orange-700'/>
                                <IoLogoJavascript className='text-yellow-300'/>
                                <DiScrum className='text-orange-400'/>
                            </div>
                            <a href="https://github.com/vimohbjj/housing-assosiation-backoffice.git"><FaGithub className='hover:text-blue-700'/></a>
                        </div>
                    </div>
                    <div className='w-11/12 hidden md:block md:w-9/12 xl:w-[3400px]'>
                        <img src={construccion} className='w-72 md:w-full rounded-xl mx-auto' alt="construccion img" />
                    </div>
                </div>
            </article>
            <article className='px-4 mt-4'>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-9'>
                    <div className='flex flex-col gap-6 border-2 border-color-gray rounded-lg p-4'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-md sm:text-lg md:text-xl lg:2xl flex flex-col sm:flex-row items-center gap-0 sm:gap-2'>
                                <span className='text-red-600 ps-2'>{'<h3>'}</span>
                                <span className='m-2 sm:ms-0'>Gym Management System</span>
                                <span className='text-red-600 ps-2'>{'</h3>'}</span>
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base flex flex-col sm:flex-row items-center gap-0 sm:gap-2">
                                <span className='text-red-600 ps-2'>{'<h4>'}</span>
                                <strong className='m-2 sm:ms-0'>Frontend Developer </strong> 
                                <span className='text-red-600 ps-2'>{'</h4>'}</span>
                            </p>
                            <p className="text-gray-300 text-sm flex flex-col gap-2">
                                <span className='text-red-600 ps-2'>{'<p>'}</span>
                                <span className='m-2 sm:ms-4'>
                                    React-based application for gym management.
                                    Developed a system to store routines and exercises with live data visualization using interactive charts and graphs.
                                </span>
                                <span className='text-red-600 ps-2'>{'</p>'}</span>
                            </p>
                            <p className='text-gray-300 text-sm flex flex-col sm:flex-row gap-2'>
                                <span className='text-red-600 ps-2'>{'<span>'}</span>
                                Completion time: 2 months
                                <span className='text-red-600 ps-2'>{'</span>'}</span>
                            </p>
                        </div>
                        <div className='flex flex-row justify-between text-2xl sm:text-3xl'>
                            <div className='flex gap-2 sm:gap-4'>
                                <FaReact className=' text-blue-500'/>
                                <FaGitAlt className='text-red-600'/>
                                <FaHtml5 className='text-orange-700'/>
                                <IoLogoJavascript className='text-yellow-300'/>
                            </div>
                            <a href="https://github.com/vimohbjj/gym-management.git"><FaGithub className='hover:text-blue-700'/></a>
                        </div>
                    </div>
                    <div className='w-full hidden md:block'>
                        <img src={gym} className='w-72 lg:w-full rounded-xl mx-auto' alt="gym img" />
                    </div>
                </div>
            </article>
        </Slider>
    </section>
  )
}

export default Projects