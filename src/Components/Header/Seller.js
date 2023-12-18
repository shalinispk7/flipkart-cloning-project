import React from 'react'
import seller from '../../Assets/img/seller.webp'
import desktop from '../../Assets/img/Desktop_sell.webp'

const Seller = () => {
  return (
    <div className='container'>
      <div className='row d-flex  align-items-center'>
        <div className='col-lg-5'>
          <h2 className='fw-bold'>
            Become a Flipkart Seller and sell to 45+Crore customers
          </h2>
        </div>
        <div className='col-lg-7'>
          <img className=' w-100' src={seller} alt='seller' />
        </div>
      </div>
      <div className='row d-flex  align-items-center mt-4'>
        <div className='col-lg-3 d-flex flex-column align-items-center'>
          <h2 className='text-primary'>14 Lakh+</h2>
          <p>Seller Community</p>
        </div>
        <div className='col-lg-3 d-flex flex-column align-items-center'>
          <h2 className='text-primary'>24*7</h2>
          <p>Online Business</p>
        </div>
        <div className='col-lg-3 d-flex flex-column align-items-center'>
          <h2 className='text-primary'>7</h2>
          <p>days * payment</p>
        </div>
        <div className='col-lg-3 d-flex flex-column align-items-center'>
          <h2 className='text-primary'>19000+</h2>
          <p>Pincodes Served</p>
        </div>
      </div>
      {/* <div>
        <h2>Why do sellers love selling on ️Flipkart?</h2>
        <p>
          45 crore+ customers across India trust Flipkart.com to be their number
          1 online shopping destination. It is no surprise that more than a
          million sellers trust their products to be made available 24x7 on
          Flipkart.
        </p>
      </div> */}
    </div>
  )
}

export default Seller
