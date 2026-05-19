import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import './style/base.css'
import Legacy from './pages/Legacy'
import Brands from './pages/Brands'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourLegacy' element={<Legacy />} />
        <Route path='/ourBrands' element={<Brands />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App