import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import axios from 'axios';
import  { Toaster } from 'react-hot-toast';
import Welcome from './Home/Welcome';





axios.defaults.baseURL='https://mernservers.onrender.com/';
axios.defaults.withCredentials=true




function App() {

  return (
    <div className="App">

      <Navbar/>
      <Toaster position='top-right' toastOptions={{duration:5000}} />
      <Routes>
        <Route path= '' element={<Home />}></Route>
        <Route path= '/loginpage' element={<Login />}></Route>
        <Route path= '/signup' element={<Signup />}></Route>
        <Route path= '/welcome' element={<Welcome />}></Route>



      </Routes>
     


    </div>
  )
}

export default App
