import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Display from './components/Display/Display'
import BookAppointment from './components/Appointment/BookAppointment';
import Aboutus from './components/About/Aboutus';
import Contactus from './components/Contact/Contactus';
import Service from './components/Services/Service';






const App = () => {
  return (
    <>
   
    <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={ <Display/>}/>
          <Route path='/appointment' element={ <BookAppointment/>}/>
          <Route path='/about' element={ <Aboutus/>}/>
          <Route path='/contact' element={ <Contactus/>}/>
          <Route path='/services' element={ <Service/>}/>
          
          
    
    </Routes>
    
    </>
  )
}

export default App