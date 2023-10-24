import React from 'react'

const CartItems = () => {
  return (
    <div className='container'>
      <div className='row'>
        {/* left */}
        <div className='col-lg-4'>
          <div className='d-flex flex-column'>
            <img />
            <div>
              <button className='  p-1 px-4 border border-light rounded '>
                -
              </button>
              <input
                value='0'
                type='text'
                style={{
                  width: '40px',
                  textAlign: 'center',
                  outline: 'none',
                }}
                className=' border border-light rounded '
              />
              <button className='  p-1 px-4 border border-light rounded'>
                +
              </button>
            </div>
          </div>
        </div>
        {/* right details */}
        <div className='col-lg-8'>
          <div className='row d-flex justify-content-around align-items-center'>
            <div className='col-lg-10'>
              <div className='d-flex flex-column gap-3'>
                <h2>title</h2>
              </div>
            </div>
            <div className='col-lg-2'>
              <div>
                <button className=' px-3 py-1 border border-danger rounded  fw-normal  text-dark '>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
      </div>
    </div>
  )
}

export default CartItems
