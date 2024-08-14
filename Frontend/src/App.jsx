import React from 'react'

import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Cources from './course/Cources'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
  <>

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/course' element={<Cources />} />
    <Route path='/signup' element={<Signup />} />
   
  </Routes>
  
  </>
  )
}

export default App
