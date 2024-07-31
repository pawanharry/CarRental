import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Display from './components/Display/Display'



const App = () => {
  return (
    <>
    <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={ <Display/>}/>
    
    </Routes>
    </>
  )
}

export default App