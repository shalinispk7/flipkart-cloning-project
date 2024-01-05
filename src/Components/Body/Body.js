import React from 'react'
import Product from '../Product/Product'
import Seller from '../Header/Seller'
import ProductDetails from '../ProductDetails/ProductDetails'
import Cart from '../Cart/Cart'
import CheckOutOrder from '../Orders/CheckOutOrder'
import OrderSummary from '../OrderSummary/OrderSummary'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import More from '../Header/More'

const Body = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/seller' element={<Seller />}></Route>
        <Route path='/more' element={<More />}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<CheckOutOrder />}></Route>
        <Route path='/ordersummary' element={<OrderSummary />}></Route>
      </Routes>
    </>
  )
}

export default Body
