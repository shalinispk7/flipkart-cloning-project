import React from 'react'
import { NavLink } from 'react-router-dom'
import empty from '../../Assets/img/empty.webp'

const EmptyCart = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light gap-6 flex-1 p-4'>
      <div>
        <img src={empty} alt='empty-logo' />
      </div>
      <h2>Sorry,Your Cart is Empty!</h2>
      <NavLink to={'/'}>
        <button className=' bg-primary text-white px-8 rounded py-2'>
          Shop Now
        </button>
      </NavLink>
    </div>
  )
}

export default EmptyCart
