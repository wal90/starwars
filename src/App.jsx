import { useState } from 'react'

import './App.css'
import {  Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Films from './pages/Films'
import Characters from './pages/Characters'
import About from './pages/About'

function App() {

  return (<>
   <NavBar/>
      <Routes>
       
          <Route path="/" element={<Home/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="characters/:id" element={<Characters/>}/>
          <Route path="/about" element={<About/>}/>
      
  
      </Routes>
  
  </>
 

  )
}

export default App
