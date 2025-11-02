import React from 'react'
import NavBar from './navbar';
import Profile from './profile';
import Stats from './stats';
import Services from './services';
import Navbar from './navbar';
import Skills from './skills';
import Education from './education';
import Footer from './footer';
import Projects from './projects';
import GithubStats from './githubStats';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Navbar />
      <Profile />
      <GithubStats  />
      <Services />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home