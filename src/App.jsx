import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Films from './pages/Films'
import Characters from './pages/Characters'

function App() {

  return (<>
   <NavBar/>
      <Routes>
        {/* <Route path="/" element={<NavBar/>}> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="characters/:id" element={<Characters/>}/>
        {/* </Route> */}
  
      </Routes>
  
  </>
 

  )
}

export default App
