import React, { useState } from 'react'
import promotion from '../../Assets/img/promotion.webp'
import SuperCoins from '../../Assets/img/Flipkart-SuperCoin.webp'
import SuperCoins2 from '../../Assets/img/promotion_banner_v2_inactive_2.webp'

const CheckOutOrder = () => {
  const [address, setAddress] = useState()
  const [pincode, setPincode] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  return (
    <div className='container mt-3'>
      <div className='row'>
        {/* left side starts */}
        <div className='col-lg-8'>
          {/* login details */}
          <div className='d-flex justify-content-center bg-light gap-6 p-3'>
            <div className='fs-6 w-6 h-6 fw-normal bg-gray-200 text-primary px-2 me-2 d-flex justify-content-center '>
              1.
            </div>
            <div className=' d-flex flex-column align-items-start flex-grow-1'>
              <h2 className='fs-5 fw-normal'>Login</h2>
            </div>
            <div>
              <button className='text-primary fs-5 fw-normal  border border-primary px-4 py-1'>
                Login
              </button>
            </div>
          </div>
          {/* delivery address */}
          <div className='bg-success'>
            {/* heading start */}
            <div className='bg-primary gap-6 p-1 mt-3 px-3 text-white d-flex '>
              <div className='fs-6 w-6 h-6 fw-normal text-white px-2 me-2'>
                2.
              </div>
              <div>
                <h2 className='fs-5 fw-normal'>Delivery Address</h2>
              </div>
            </div>
            {/* heading ends */}
          </div>
          {/* address details starts*/}
          <div p-5 py-2>
            <form>
              <h2 className='fs-5 fw-normal'>Add Address</h2>
              {/* <div className='d-flex gap-3'>
                <textarea value={address} required fullWidth />
                <textarea value={pincode} required fullWidth />
              </div> */}
              <div className='d-flex gap-3'>
                <div className='form-floating  w-100 '>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInput'
                    placeholder='name@example.com'
                  />
                  <label for='floatingInput'>Email address</label>
                </div>
                <div className='form-floating w-100'>
                  <input
                    type='password'
                    className='form-control '
                    id='floatingPassword'
                    placeholder='Password'
                  />
                  <label for='floatingPassword'>Password</label>
                </div>
              </div>
              <button
                type='submit'
                style={{
                  backgroundColor: 'orange',
                }}
                className=' px-3 border border-light rounded uppercase  fs-5 fw-normal py-2 text-light mt-3 '
              >
                Save And Delivery Here
              </button>
            </form>
          </div>
          {/* address details ends*/}
          {/* delivery ends */}
          {/* order summary */}
          <div>
            <div className='d-flex align-items-center bg-primary gap-6 p-1 px-3 mt-3'>
              <div className='fs-6 w-6 h-6 fw-normal text-white px-2 me-2'>
                3.
              </div>
              <div className=' d-flex flex-column align-items-start'>
                <h2 className='fs-5 fw-normal text-light'>Order Summary</h2>
              </div>
            </div>
          </div>
          {/* order summary */}

          {/* payment option */}
          <div>
            <div className='d-flex align-items-center bg-primary mt-3 gap-6 p-1 px-3'>
              <div className='fs-6 w-6 h-6 fw-normal text-white px-2 me-2'>
                4.
              </div>
              <div className=' d-flex flex-column align-items-start'>
                <h2 className='fs-5 fw-normal text-light'>Payment Options</h2>
              </div>
            </div>
            <div className='mt-3 ms-3'>
              <button className='text-primary fs-5 fw-normal  border border-primary px-4 py-1'>
                Paytm
              </button>
            </div>
          </div>
          {/* payment option */}
        </div>
        {/* left side ends */}
        {/* right side starts /payment portion*/}
        <div className='col-lg-4'>
          <div className=' p-6  border-bottom'>
            <h2 className='fs-4 fw-normal text-secondary text-center'>
              Price Description
            </h2>
          </div>
          <div className='p-4'>
            <ul className=' border-dashed border-bottom border-black p-3'>
              <li className=' d-flex justify-between'>
                <h2 className='fs-6 fw-normal pb-2'>Product</h2>
              </li>
              <li className=' d-flex justify-between '>
                <h2 className='fs-6 fw-normal pb-2'>Delivery Charges</h2>
              </li>
              <li className=' d-flex justify-between '>
                <h2 className='fs-6 fw-normal '>Tax</h2>
              </li>
            </ul>
            <div className=' border-bottom border-black px-3'>
              <h2 className='fs-5 fw-normal'>Total Amount</h2>
            </div>
            <div className='mt-3 '>
              <img className='w-100 py-2' src={SuperCoins2} />
            </div>
            <div className='mt-3 d-flex align-items-center'>
              <div className='me-2'>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png' />
              </div>
              <h6 className='text-muted  fw-normal fs-6'>
                Save and Secure Payment. Easy Returns. 100% Authentic Products
              </h6>
            </div>
          </div>
        </div>
        {/* right side ends */}
      </div>
    </div>
  )
}

export default CheckOutOrder
