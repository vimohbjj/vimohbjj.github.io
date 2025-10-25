import React from 'react'
import { HomeIcon, UserIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

 const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black p-4 text-white'>
      <div className=''>
        <a href="">
          <h2 className=''>Vicenzo.Dev</h2>
        </a>
      </div>
      <div className='flex flex-row gap-5'>
        <a href="">About me</a>
        <a href="">Resume</a>
        <a href="">Project</a>
      </div>
      <div className=''>
        <a href="">Linkdin</a>
        <a href="">Github</a>
        <a href="">Instagram</a>
      </div>
    </nav>
  )
}

export default Navbar