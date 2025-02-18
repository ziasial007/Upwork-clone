import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainHome from './components/MainHome'
import Join from './components/Join'
import Login from './components/Login'
const App = () => {
  return (

    <div>

      <Router>
      
        <Navbar />
        <div className="margin mt-[130px]">
        <Routes>
        <Route path='/' element={<MainHome />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/join' element={<Join />}  />
          <Route path='/home' element={<Home />} />
        </Routes>
        </div>
        <Footer />
      </Router>


    </div>
  )
}

export default App
