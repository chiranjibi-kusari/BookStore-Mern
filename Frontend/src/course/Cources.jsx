import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cource from '../components/Cource'


const Cources = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Cource />
    </div>
    
    <Footer />
    </>
  )
}

export default Cources