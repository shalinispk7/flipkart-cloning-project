import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Store/ProductContext'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
  const { productsAdded } = useSelector((store) => store.user)

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
