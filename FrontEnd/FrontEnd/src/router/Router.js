import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './../Pages/Home'
import Tours from './../Pages/Tours'
import TourDetails from './../Pages/TourDetails'
import Login from './../Pages/Login'
import Register from './../Pages/Register'
import SearchList from './../Pages/SearchList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Thankyou from '../Pages/Thankyou'
import { AuthContextProvider } from '../context/AuthContext'
import About from '../Pages/About'
import Booking from '../components/Booking/Booking'
import UserAdmin from '../components/UserAdmin/UserAdmin'

const Router = () => {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Navigate to='/home'/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/tours' element={<Tours/>}></Route>
          <Route path='/tours/:id' element={<TourDetails/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/thank-you' element={<Thankyou/>}></Route>
          <Route path='/booking' element={<Booking/>}></Route>
          <Route path='/tour/search' element={<SearchList/>}></Route>
          <Route path='/admin' element={<UserAdmin/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthContextProvider>
  )
}

export default Router