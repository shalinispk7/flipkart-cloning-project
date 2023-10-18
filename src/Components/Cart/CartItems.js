import React from 'react'

const CartItems = () => {
  return (
    <div className=' d-flex  border p-2 gap-4'>
      {/* left */}
      <div className='  d-flex flex-column gap-3'>
        <img className=' mx-auto my-2 w-28' />
        <div className=' mx-auto w-full rounded-2xl overflow-hidden d-flex'>
          <button className='  p-1 px-4 bg-slate-300 border-black'>-</button>
          <input value='0' type='text' className=' px-3 border w-0' />
          <button className='  p-1 px-4 bg-slate-300 border-black'>+</button>
        </div>
      </div>

      {/* center/details */}
      <div className=' d-flex  gap-3 w-full justify-between items-start p-2'>
        <div className='d-flex flex-column gap-3'>
          <h2>title</h2>
        </div>

        {/* remove button */}
        <div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
