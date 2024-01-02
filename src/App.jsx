import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import LandingPage from './components/LandingPage'
import Advantages from './components/Advantages'
import Interescted from './components/Interescted'
import Footer from './components/Footer'

function App() {

 


  return (
    <div className='app'>
   <Header />
   <AboutMe />
   <LandingPage/>
   <Advantages />
   <Skills />
   <Interescted/>
   <Footer />
   
   </div>
  )
}

export default App
