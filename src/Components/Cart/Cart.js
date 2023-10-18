import React from 'react'
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../Store/ProductContext'
import { useContext } from 'react'

const Cart = () => {
  const { productsAdded, setProductsAdded } = useContext(ProductContext)
  return (
    <div className='d-flex p-4  gap-4'>
      <div className='flex-1 bg-light'>
        {/* heading */}
        <div className='d-flex align-items-center justify-content-between border-b-2'>
          <h2 className='fw-semibold'>
            My Cart ({Object.keys(productsAdded).length})
          </h2>
          <NavLink to={'/checkout'}>
            <button className='px-4 py-2 rounded bg-primary text-white '>
              Check Out
            </button>
          </NavLink>
        </div>
        {/* cart container */}
        <div className='d-flex flex-column'>
          <CartItems />
          {/* <EmptyCart /> */}
        </div>
        {/* cart container ends */}
      </div>
    </div>
  )
}

export default Cart
