import React from 'react'

import Product from '../Product/Product'
import ProductDetails from '../ProductDetails/ProductDetails'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body
// import ProductType from './components/ProductType/ProductType'
// ;<Route path='/producttype/:type' element={<ProductType />} />
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import ProductType from "./components/ProductType/ProductType";
// import ProductDetails from "./components/ProductDetails/ProductDetails";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/producttype/:type" element={<ProductType />} />
//           <Route path="/productdetails" element={<ProductDetails />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
