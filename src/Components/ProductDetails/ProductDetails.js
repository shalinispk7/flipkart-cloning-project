import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  allProducts,
  womenProducts,
  electronicProducts,
} from '../Product/ProductData'
import cart from '../../Assets/svg/cart.svg'
// import buynow from '../../Assets/svg/buynow.svg'
import { BagHeart } from 'react-bootstrap-icons'
import './ProductDetails.css'
import { ProductContext } from '../../Store/ProductContext'
import { useContext } from 'react'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { productsAdded, setProductsAdded } = useContext(ProductContext) //productcontext la erunthu yethu use panromo athu left side then use contextla enga erunthu yeduthutu varamo athu podanum

  const AddToCart = () => {
    setProductsAdded((prev) => ({
      ...prev,
    }))
    navigate('/cart')
  }
  const BuyNow = () => {
    navigate('/checkout')
  }
  return (
    <div>
      {allProducts
        .filter((e) => e._id === id)
        .map((e, index) => {
          return (
            <>
              <div className='d-flex flex-column'>
                <div className='p-3 d-flex bg-white'>
                  {/* LEFT SIDE STARTS*/}
                  <div className='w-50 flex-1 d-flex flex-column p-6'>
                    <div className='t-20 position-sticky'>
                      <img
                        loading='lazy'
                        className='hover:scale-105 cursor-pointer transition-all mx-auto w-80'
                        src={e.images[0].url}
                        alt='imgage'
                      />
                      <div className=' my-8 d-flex align-items-center gap-4 justify-content-between'>
                        <button
                          className='w-100 buybtn'
                          onClick={() => AddToCart()}
                        >
                          <img src={cart} className='pe-2' />
                          ADD TO CART
                        </button>
                        <button
                          className='w-100 buybtn buy'
                          onClick={() => BuyNow()}
                        >
                          <BagHeart className='pe-2 fs-4' />
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT SIDE STARTS*/}
                  <div className='p-4 px-8 w-50'>
                    {/* HEADIND SECTION */}
                    <div className='d-flex flex-column gap-2'>
                      <h1 className='capitalize text-xl fw-semibold'>
                        {e.title}
                      </h1>
                      {/* rating */}
                      <div className='d-flex gap-4 align-items-center'>
                        <div className='fw-bold d-flex gap-1 align-items-center bg-success text-white px-2 '>
                          <h1>{e.rating}</h1>
                        </div>
                        <h1 className=' text-gray text-sm fw-bold'>
                          {e.numrev} Ratings & {e.numrev}reviews
                        </h1>
                      </div>
                      {/* price */}
                      <h1 className=' text-sm fw-bold text-success '>
                        Special Price
                      </h1>
                      <h1 className=' fw-bold text-3xl'>
                        Rs. {e.price}
                        <del className=' mx-4 text-gray fw-bold text-sm'>
                          {' '}
                          Rs.{e.cureted_price}
                        </del>
                        <span className=' text-success text-base'>
                          {(
                            ((e.cureted_price - e.price) / e.cureted_price) *
                            100
                          ).toFixed(2)}
                          %
                        </span>
                      </h1>
                      {/* stock0 */}
                      <p className='  text-lg fw-bold capitalize '>
                        <span>Stock : </span>
                        {e.stock === 0 ? (
                          <span className='text-red-400'>out of stock</span>
                        ) : (
                          e.stock
                        )}{' '}
                      </p>
                      {/* category */}
                      <p className='  text-lg fw-bold capitalize '>
                        <span>category : </span> {e.category}{' '}
                      </p>
                    </div>
                    {/* OFFER SECTION */}
                    <div className=' border my-4'>
                      <h1 className=' border-b p-3 text-lg fw-bold capitalize'>
                        Available offers
                      </h1>
                      <ul className='d-flex flex-column p-4 gap-3'>
                        <li className=' d-flex gap-3 align-items-center'>
                          {/* <SellIcon className=' text-green-600' /> */}
                          <p>Buy this Product and Get Extra ₹500 Off </p>
                        </li>
                        <li className=' d-flex gap-3 align-items-center'>
                          {/* <SellIcon className=' text-green-600' /> */}
                          <p>Buy this Product and Get Extra 10% cashback </p>
                        </li>
                        <li className=' d-flex gap-3 align-items-center'>
                          {/* <SellIcon className=' text-green-600' /> */}
                          <p>
                            Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit
                            Card on 3 months EMI Txns, Min Txn Value ₹10,000
                          </p>
                        </li>
                        <li className=' d-flex gap-3 align-items-center'>
                          {/* <SellIcon className=' text-green-600' /> */}
                          <p>
                            Partner OfferSign-up for Flipkart Pay Later & get
                            free Times Prime Benefits worth ₹10,000*{' '}
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* ratings reviews */}
                    <div className=' border border-b-0 my-4'>
                      <h1 className=' text-xl'>Reviews And Ratings</h1>
                      {e.reviews && e.reviews.length > 0 ? (
                        e.reviews.map((elemVal, index) => {
                          return (
                            <div
                              key={index}
                              className=' p-4 d-flex flex-column gap-4 border-b'
                            >
                              <div className=' d-flex align-items-center gap-3'>
                                {/* <Avatar /> */}
                                <h1 className=' font-bold capitalize'>
                                  {' '}
                                  {elemVal.name}{' '}
                                </h1>
                                <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
                                  <h1>{elemVal.rate}</h1>
                                </div>
                              </div>
                              <p className=' text-sm font-medium'>
                                {elemVal.Comment}
                              </p>
                            </div>
                          )
                        })
                      ) : (
                        <div className=' p-4 border-b'>
                          <h1 className=' text-lg font-semibold text-center'>
                            No Reviews
                          </h1>
                        </div>
                      )}
                    </div>
                    {/* product description SECTION */}
                    <div className=' border'>
                      <div className='p-4 d-flex align-items-center border-b fw-bold'>
                        <h1 className=' text-2xl'>Product Description</h1>
                      </div>
                      <p className='p-4 text-sm leading-6'>{e.decr}</p>
                    </div>
                  </div>
                  {/* RIGHT SIDE ENDS */}
                </div>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default ProductDetails
