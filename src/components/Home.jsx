import React from 'react'
import NavBar from './navbar';
import Profile from './profile';
import Stats from './stats';
import Services from './services';

const Home = () => {
  return (
    <section className="grid grid-cols-1 gap-4">
      <NavBar className='col-span-1'></NavBar>
      <Profile className='col-span-1'></Profile>
      <Services className='col-span-1'></Services>
    </section>
  )
}

export default Home