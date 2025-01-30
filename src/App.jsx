import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import AppRouter from './routes/AppRouter'


function App() {

  return (
    <>
    <Navbar/>
    <AppRouter/>
    <Footer/>
    </>
  )
}

export default App
