import React from 'react'
import Header from '../Header/Header'
import LoginForm from './LoginForm'
import flipkart from '../../Assets/img/Flipkart-sees-rural-shoppers-increase-online-shopping.jpg'

const Login = () => {
  return (
    <div className='d-flex justify-content-center '>
      {/* <Header /> */}
      <div className=''>
        <img src={flipkart} alt='IMG' className='w-100' />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
