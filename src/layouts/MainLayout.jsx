import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UpButton from '../components/UpButton'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <UpButton/>
      <Footer/>
    </div>
  )
}

export default MainLayout
