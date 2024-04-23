import React from 'react'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Register from './components/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='page2' element={<Page2/>} ></Route>
        <Route path='register' element={<Register/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App