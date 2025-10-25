import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { DiTerminalBadge } from 'react-icons/di';
import { BsCode } from 'react-icons/bs';

 const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-color-dark m-3 p-4 text-white rounded-lg border-4 border-black border-l-green-900 border-b-green-900'>
      <div className=''>
        <a href="" className='flex flex-row items-center text-lg'>
          <BsCode className='text-3xl pe-1'/>
          <h2 className=''>Vicenzo.Dev</h2>
        </a>
      </div>
      <div className='flex flex-row gap-5'>
        <a href="">About me</a>
        <a href="">Resume</a>
        <a href="">Project</a>
      </div>
      <div className='flex flex-row gap-5 text-lg'>
        <a href="https://www.linkedin.com/in/vicenzo-halley-moneta-hernandez-8176992bb"><FaLinkedin /></a>
        <a href="https://github.com/vimohbjj"><FaGithub /></a>
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar