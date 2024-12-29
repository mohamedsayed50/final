import logo from './logo.svg';
import './App.css';
import Card from './components/productCard';
import Home from './components/HomeCard/HomeCard';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/DetailsProduct';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import Search from './components/Search';
import Category from './components/category';




function App() {

 
  
  Aos.init();
  return (
    <>
    <Toaster />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/details/:productID' element={<ProductDetails/>}/>
      <Route path='/search/:Title' element={<Search/>}/>
      <Route path='/category/:type' element={<Category/>}/>
    </Routes>
    
    </>
  );
}

export default App;
