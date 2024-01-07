import React, { useState, useCallback, useEffect } from 'react'
import promotion from '../../Assets/img/promotion.webp'
import SuperCoins from '../../Assets/img/Flipkart-SuperCoin.webp'
import SuperCoins2 from '../../Assets/img/promotion_banner_v2_inactive_2.webp'
import CartItems from '../Cart/CartItems'
import useRazorpay from 'react-razorpay'
import { useContext } from 'react'
import { ProductContext } from '../../Store/ProductContext'
import OrderSummary from '../OrderSummary/OrderSummary'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CheckOutOrder = () => {
  const { productsAdded } = useSelector((store) => store.user)

  const navigate = useNavigate()

  const [totalAmount, setTotalAmount] = useState({
    total: 0,
    tax: 0,
    delivery: Object.keys(productsAdded).length > 0 ? 50 : 0,
  })

  const [Razorpay] = useRazorpay()

  useEffect(() => {
    let TotalAmount = 0
    let TaxAmount = 0
    Object.keys(productsAdded).map((val) => {
      TotalAmount =
        TotalAmount + productsAdded[val].price * productsAdded[val].count
      TaxAmount =
        TaxAmount +
        (productsAdded[val].price * productsAdded[val].count * 18) / 100
    })
    setTotalAmount((prev) => ({
      ...prev,
      total: TotalAmount,
      tax: TaxAmount,
      delivery: Object.keys(productsAdded).length > 0 ? 50 : 0,
    }))
  }, [productsAdded])
  const handlePayment = async (params) => {
    // const order = await createOrder(params) //  Create order on your backend

    const options = {
      key: 'rzp_test_HCL5jMsuSBxtxq',
      amount:
        (totalAmount.total + totalAmount.delivery + totalAmount.tax) * 100, // Amount in paisa
      name: 'SPK FEDS',
      description: 'Product or Service Description',
      image: 'https://your-company-logo.png',
      handler: function (response) {
        navigate('/ordersummary')
      },
      prefill: {
        name: 'SHALINI',
        email: 'customer@example.com',
        contact: 'customer_contact_number',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <div className='container mt-3'>
      <div className='row'>
        {/* left side starts */}
        <div className='col-lg-8'>
          {/* delivery address */}
          <div className='bg-success'>
            {/* heading start */}
            <div className='bg-primary gap-6 p-1 mt-3 px-3 text-white d-flex '>
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
                    placeholder='.com'
                  />
                  <label for='floatingInput'>Email address</label>
                </div>
                <div className='form-floating w-100'>
                  <input
                    type='password'
                    className='form-control '
                    id='floatingPassword'
                    placeholder=''
                  />
                  <label for='floatingPassword'>Password</label>
                </div>
              </div>
              {/* <button
                type='submit'
                style={{
                  backgroundColor: 'orange',
                }}
                className=' px-3 border border-light rounded uppercase  fs-5 fw-normal py-2 text-light mt-3 '
              >
                Deliver Here
              </button> */}
            </form>
          </div>
          {/* address details ends*/}
          {/* delivery ends */}
          {/* order summary */}
          <div>
            <div className='d-flex align-items-center bg-primary gap-6 p-1 px-3 mt-3'>
              <div className=' d-flex flex-column align-items-start'>
                <h2 className='fs-5 fw-normal text-light'>Order Summary</h2>
              </div>
            </div>
            <CartItems />
          </div>
          {/* order summary */}

          {/* payment option */}
          <div>
            <div className='d-flex align-items-center bg-primary mt-3 gap-6 p-1 px-3'>
              <div className=' d-flex flex-column align-items-start'>
                <h2 className='fs-5 fw-normal text-light'>Payment Options</h2>
              </div>
            </div>
            <div className='mt-3 ms-3'>
              <button
                onClick={() => handlePayment()}
                className='text-primary fs-5 fw-normal  border border-primary px-4 py-1'
              >
                PayHere
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
              <li className=' d-flex justify-content-between'>
                <h2 className='fs-6 fw-normal pb-2 text-dark'>
                  Products ({Object.keys(productsAdded).length})
                </h2>
                <h2 className='fs-6 fw-normal pb-2 text-dark'>
                  Rs. {totalAmount.total}
                </h2>
              </li>
              <li className=' d-flex justify-content-between '>
                <h2 className='fs-6 fw-normal pb-2 text-dark'>
                  Delivery Charge
                </h2>
                <h2 className='fs-6 fw-normal pb-2 text-dark'>
                  Rs. {totalAmount.delivery}
                </h2>
              </li>
              <li className=' d-flex justify-content-between '>
                <h2 className='fs-6 fw-normal text-dark'>Tax in Amount</h2>
                <h2 className='fs-6 fw-normal pb-2 text-dark'>
                  Rs. {totalAmount.tax.toFixed(2)}
                </h2>
              </li>
            </ul>

            <div className=' border-bottom border-black px-3 d-flex justify-content-between align-items-center'>
              <h2 className='fs-5 fw-normal text-dark'>Total Amount</h2>
              <h2 className='fs-3'>
                Rs.
                {totalAmount.total + totalAmount.delivery + totalAmount.tax}
              </h2>
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
