import React from 'react'
import NavBar from './navbar';
import Profile from './profile';

const Home = () => {
  return (
    <section className="grid grid-cols-1 gap-4">
        <div className='col-span1'>
          <NavBar></NavBar>
        </div>
        <div className='col-span-1'>
          <Profile></Profile>
        </div>
    </section>
  )
}

export default Home