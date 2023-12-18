import React, { useContext } from 'react'
import { allProducts, womenProducts, electronicProducts } from './ProductData'
import ProductCard from './ProductCard'
import Banner from '../Banner/Banner'
import { ProductContext } from '../../Store/ProductContext'

const Product = () => {
  const { searchText } = useContext(ProductContext)
  return (
    <>
      <div className='container'>
        <Banner />
        <h3 className='text-dark'>Top Rated Products</h3>
        <div className='row'>
          {allProducts.map((val, index) => {
            if (val.title.toLowerCase().indexOf(searchText?.toLowerCase()) >= 0)
              return <ProductCard key={index} value={val} />
          })}
        </div>
        {/* womens */}
        <h3 className='text-dark'>women products</h3>
        <div className='row'>
          {womenProducts.map((val, index) => {
            return <ProductCard key={index} value={val} />
          })}
        </div>
        {/* electronics */}
        <h3 className='text-dark'>Electronic Products</h3>
        <div className='row'>
          {electronicProducts.map((val, index) => {
            return <ProductCard key={index} value={val} />
          })}
        </div>
      </div>
    </>
  )
}

export default Product
