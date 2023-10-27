import React, { useState } from 'react'
import { allProducts, womenProducts, electronicProducts } from './ProductData'
import ProductCard from './ProductCard'
import Banner from '../Banner/Banner'

const Product = () => {
  const [product, setProduct] = useState(allProducts)
  const [womenProduct, setWomenProducts] = useState(womenProducts)
  const [electronicProduct, setElectronicProducts] =
    useState(electronicProducts)

  return (
    <>
      <div className='container'>
        <Banner />
        <h3 className='text-dark'>Top Rated Products</h3>
        <div className='row'>
          {product.map((val, index) => {
            return <ProductCard key={index} value={val} />
          })}
        </div>
        {/* womens */}
        <h3 className='text-dark'>women products</h3>
        <div className='row'>
          {womenProduct.map((val, index) => {
            return <ProductCard key={index} value={val} />
          })}
        </div>
        {/* electronics */}
        <h3 className='text-dark'>Electronic Products</h3>
        <div className='row'>
          {electronicProduct.map((val, index) => {
            return <ProductCard key={index} value={val} />
          })}
        </div>
      </div>
    </>
  )
}

export default Product
