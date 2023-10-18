import React from 'react'

import Product from '../Product/Product'
import ProductDetails from '../ProductDetails/ProductDetails'
import Cart from '../Cart/Cart'
import CheckOutOrder from '../Orders/CheckOutOrder'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route
            path='/ProductDetails/:id'
            element={<ProductDetails />}
          ></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<CheckOutOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body
