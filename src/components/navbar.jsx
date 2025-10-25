import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { DiTerminalBadge } from 'react-icons/di';
import { BsCode } from 'react-icons/bs';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative bg-color-dark after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 text-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button 
                            type="button" 
                            onClick={toggleMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                            >
                    
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                                aria-hidden="true" 
                                className={`size-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                            >
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                    
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                                aria-hidden="true" 
                                className={`size-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                            >
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <a href="" className='flex-row items-center text-lg hidden sm:ml-6 sm:block'>
                        <h2 className=''>Vicenzo.Dev</h2>
                    </a>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About me</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Resume</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 text-lg text-white'>
                        <a href="https://www.linkedin.com/in/vicenzo-halley-moneta-hernandez-8176992bb"><FaLinkedin /></a>
                        <a href="https://github.com/vimohbjj"><FaGithub /></a>
                        <FaInstagram />
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <a href="#" className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">About me</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Resume</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Project</a>
                </div>
            </div>
        </nav>
  )
}

export default Navbar