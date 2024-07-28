import React from 'react'
import { Routes, Route,} from "react-router-dom";
import MainPage from './Components/MainPage';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Welfare from './Components/Welfare';
import Login from './Components/Login';
import Registration from './Components/Registration';




export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/Welfare' element={<Welfare/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>

    </>

  )
}

