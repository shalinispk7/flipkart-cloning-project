import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Store/ProductContext'

const OrderSummary = () => {
  const { productsAdded, setProductsAdded } = useContext(ProductContext)

  return (
    <>
      {Object.keys(productsAdded).map((e) => {
        return (
          <>
            count: {productsAdded[e].count}
            price:{productsAdded[e].price}
            name:{productsAdded[e].name}
          </>
        )
      })}
    </>
  )
}

export default OrderSummary
