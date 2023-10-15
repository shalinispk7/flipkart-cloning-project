import React from 'react'
import { useParams } from 'react-router-dom'
import {
  allProducts,
  womenProducts,
  electronicProducts,
} from '../Product/ProductData'

const ProductDetails = () => {
  let { id } = useParams()
  return (
    <div>
      {allProducts
        .filter((e) => e._id === id)
        .map((e, index) => {
          return <p>{e._id}</p>
        })}
      {/* <button>ADD TO CART</button>
      <button>BUY NOW</button> */}
    </div>
  )
}

export default ProductDetails
