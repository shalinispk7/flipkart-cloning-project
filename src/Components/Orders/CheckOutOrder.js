import React, { useState } from 'react'

const CheckOutOrder = () => {
  const [address, setAddress] = useState()
  const [pincode, setPincode] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  return (
    <div className='d-flex p-6 gap-3'>
      {/* left side */}
      <div className='flex-1'>
        {/* login details */}
        <div className='bg-light d-flex align-items-center  py-3.5 gap-6'>
          <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
            1.
          </div>
          <div className=' d-flex flex-column align-items-start'>
            <h2>Login</h2>
          </div>
          <div className='ml-auto'>
            <button>Login</button>
          </div>
        </div>
        {/* login details */}
        {/* Delivery address */}
        <div className=''>
          {/* heading starts */}
          <div className='bg-primary text-white d-flex align-items-center '>
            <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
              2.
            </div>
            <div className=' d-flex flex-column align-items-start'>
              <h2>Delivery Address</h2>
            </div>
          </div>
          {/* heading ends */}
          <div className='p-5 py-2'>
            <form className=' p-6 d-flex flex-column gap-6 w-3/4'>
              <h2 className='text-lg fw-bold'>Add Address</h2>
              <div className='d-flex gap-3'>
                <textfield
                  label='address'
                  variant='outlined'
                  size='small'
                  value={address}
                  required
                  fullWidth
                />
                <textfield
                  label='pincode'
                  variant='outlined'
                  size='small'
                  value={pincode}
                  required
                  fullWidth
                />
              </div>
              <div className='d-flex gap-3'>
                <textfield
                  label='city'
                  variant='outlined'
                  size='small'
                  value={city}
                  required
                  fullWidth
                />
                <textfield
                  label='state'
                  variant='outlined'
                  size='small'
                  value={state}
                  required
                  fullWidth
                />
              </div>
              <div className='d-flex gap-3'>
                <textfield
                  label='country'
                  variant='outlined'
                  size='small'
                  value={country}
                  required
                  fullWidth
                />
              </div>
              <button
                type='submit'
                className=' px-12 rounded uppercase  text-lg fw-bold py-3 text-dark'
              >
                Save And Delivry Here
              </button>
            </form>
          </div>
        </div>
        {/* Delivery address */}
        {/* order summary */}
        <div>
          <div className='bg-primary text-white d-flex align-items-center mt-4 '>
            <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
              3.
            </div>
            <div className=' d-flex flex-column align-items-start'>
              <h2>Order Summary</h2>
            </div>
          </div>
        </div>
        {/* order summary */}
        {/* payment option */}
        <div>
          <div className='bg-primary text-white d-flex align-items-center mt-4 '>
            <div className=' h-6 w-6 font-bold bg-slate-100 p-3 flex items-center justify-center  text-primary'>
              4.
            </div>
            <div className=' d-flex flex-column align-items-start'>
              <h2>Patment Options</h2>
            </div>
          </div>
        </div>
        {/* payment option */}
      </div>
      {/* right side /PAYMENT PORTION*/}
    </div>
  )
}

export default CheckOutOrder
