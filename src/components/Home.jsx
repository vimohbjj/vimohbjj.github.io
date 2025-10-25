import React from 'react'
import NavBar from './componentes/navbar';
import Profile from './componentes/profile';

const Home = () => {
  return (
    <section class="grid grid-cols-6 gap-4">
        <NavBar></NavBar>
        <Profile></Profile>
    </section>
  )
}

export default Home