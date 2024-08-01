import React from 'react'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function Aps() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Content/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default Aps
