import React from 'react'
import NavBar from './navbar';
import Profile from './profile';
import Stats from './stats';
import Services from './services';
import Navbar from './navbar';
import Skills from './skills';
import Footer from './footer';

const Home = () => {
  return (
    <section className="grid grid-cols-1 gap-4">
      <Navbar className=''></Navbar>
      <Profile className='col-span-1'></Profile>
      <Services className='col-span-1'></Services>
      <Skills className='col-span-1'></Skills>
      <Footer className='col-span-1'></Footer>
    </section>
  )
}

export default Home