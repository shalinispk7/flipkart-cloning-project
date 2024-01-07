import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Store/ProductContext'

const OrderSummary = () => {
  const { productsAdded, setProductsAdded } = useContext(ProductContext)
  const [orderSummary, setOrderSummary] = useState(productsAdded)
  useEffect(() => {
    setOrderSummary(productsAdded)
    setProductsAdded({})
  }, [])
  return (
    <>
      <h1 className='d-flex justify-content-center'>ITEMS SUMMARY</h1>
      {Object.keys(orderSummary).length ? (
        Object.keys(orderSummary).map((el) => {
          return (
            <>
              <div className='row '>
                <div className='col-lg-12 ms-5'>
                  <div className=' d-flex'>
                    <div className='d-flex gap-2'>
                      <h2 className='fw-normal fs-5 col-lg-8'>
                        {orderSummary[el].name}
                      </h2>

                      <h2 className='fw-normal fs-5 col-lg-4'>
                        Rs. {orderSummary[el].price} * {orderSummary[el].count}{' '}
                        = Rs.
                        {orderSummary[el].price * orderSummary[el].count}
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <p>count: {orderSummary[e].count}</p>
                <p>price:{orderSummary[e].price}</p>
                <p>name:{orderSummary[e].name}</p> */}
              </div>
            </>
          )
        })
      ) : (
        <h3 className='text-primary d-flex justify-content-center p-5'>
          Kindly place an Order to display in summary
        </h3>
      )}
    </>
  )
}

export default OrderSummary
