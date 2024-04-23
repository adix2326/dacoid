import React from 'react'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='/page2' element={<Page2/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/page3' element={<Page3/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App