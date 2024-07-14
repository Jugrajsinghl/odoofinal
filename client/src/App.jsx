import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/User'
import SearchResult from './components/SearchResult'
import LoginPage from './components/Login/Login'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route, json} from 'react-router-dom';import RegisterPage from './components/Register/Register'
import { useAuth0 } from "@auth0/auth0-react";
import {gapi} from 'gapi-script'

function App() {
 
  


  // console.log(localStorage.getItem('user'));
  const User = JSON.parse(localStorage.getItem('UserInfo'))
  console.log(User);
  return (
    
    <BrowserRouter>
    <Routes>
      if (condition) {
        
      }
      <Route path='/' element={User?<UserProfile/>:<Home/>}/>
      <Route path='/search' element={User?<SearchResult/>:<LoginPage/>}/>
      <Route path='/login' element={User?<Home/>:<LoginPage/>}/>
      <Route path='/register' element={User?<Home/>:<RegisterPage/>}/>

      
    </Routes>
    </BrowserRouter>
   
    
  )
}

export default App
