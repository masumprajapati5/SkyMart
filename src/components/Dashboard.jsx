import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import Footer from './Footer'
import { Routes, Route } from "react-router";
import Shop from '../pages/Shop';
import About from '../pages/About';
import Details from './Details';
import ScrollToTop from './ScrollToTop';
import axios from 'axios';
import { MyStore } from '../Context/MyContext';

const Dashboard = () => {
    const {setProducts}=useContext(MyStore)
    const getproducts=async()=>{
        const res=await axios("https://fakestoreapi.com/products")
        setProducts(res.data)
    }
    useEffect(()=>{
        getproducts()
    },[])
  return (
    <div className='min-h-screen bg-white text-neutral-900 flex flex-col justify-between'>
        <ScrollToTop />
        <div>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              <Route path='/shop/:id' element={<Details/>}></Route>
              <Route path='/about' element={<About/>}></Route>
          </Routes> 
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard
