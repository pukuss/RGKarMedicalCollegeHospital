import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
        <Navbar />
        <div className=' w-screen  m-auto'>
      <div className=' max-w-[1400px] '> <Outlet /> </div>
    </div>
        <Footer />
    </>
  )
}

export default Root
