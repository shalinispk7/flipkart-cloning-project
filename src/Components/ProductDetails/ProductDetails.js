import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  allProducts,
  womenProducts,
  electronicProducts,
} from '../Product/ProductData'
import cart from '../../Assets/svg/cart.svg'
// import buynow from '../../Assets/svg/buynow.svg'
import { BagHeart, TagFill, PersonCircle, Apple } from 'react-bootstrap-icons'
import './ProductDetails.css'
import { ProductContext } from '../../Store/ProductContext'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setProductsAdded } from '../../ReduxStore/userSlice'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { productsAdded } = useContext(ProductContext) //productcontext la erunthu yethu use panromo athu left side then use contextla enga erunthu yeduthutu varamo athu podanum

  const cartUpdate = (cartValue) => {
    dispatch(setProductsAdded(cartValue))
    // setProductsAdded((prev) => ({
    //   ...prev,
    //   [cartValue._id]: {
    //     name: cartValue.title,
    //     curetedprice: cartValue.cureted_price,
    //     price: cartValue.price,
    //     img: cartValue.images[0].url,
    //     stock: cartValue.stock,
    //     rating: cartValue.rating,
    //     count: prev[cartValue._id]?.count ? prev[cartValue._id].count + 1 : 1,
    //   },
    // }))
  }

  const AddToCart = (cartValue) => {
    cartUpdate(cartValue)
  }
  const BuyNow = (cartValue) => {
    cartUpdate(cartValue)
    navigate('/checkout')
  }

  return (
    <>
      {allProducts
        .filter((e) => e._id === id) //allproducts la erunthu filter pani vaara id um productdetailsl url la vara id um same ah erukanum
        .map((e, index) => {
          return (
            <>
              <div className='container'>
                <div className='row mt-3'>
                  {/* LEFT SIDE STARTS*/}
                  <div className='col-lg-4 '>
                    <div className='card '>
                      <div className='w-50'>
                        <img
                          src={e.images[0].url}
                          alt='imgage'
                          className='w-100 '
                        />
                      </div>
                      <div className='d-flex align-items-center gap-4 justify-content-between mt-4'>
                        <button
                          className='w-100 buybtn'
                          onClick={() => AddToCart(e)}
                        >
                          {/* <img src={cart} className='pe-2' /> */}
                          ADD TO CART
                        </button>
                        <button
                          className='w-100 buybtn buy'
                          onClick={() => BuyNow(e)}
                        >
                          <BagHeart className='pe-2 fs-4' />
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* LEFT SIDE ENDS*/}
                  {/* RIGHT SIDE STARTS*/}
                  <div className='col-lg-8 '>
                    {/* HEADING SECTION STARTS */}
                    <div>
                      <h2 className='fw-normal fs-5 '>{e.title}</h2>
                      {/* rating */}
                      <div className='d-flex gap-2 align-items-center'>
                        <div
                          className='bg-success rounded-2'
                          style={{ width: 'fit-content' }}
                        >
                          <div className='d-flex align-items-center gap-2 p-1 text-light '>
                            <span
                              className='fw-normal'
                              style={{ fontSize: '1rem' }}
                            >
                              {e.rating.toFixed(2)}
                            </span>
                            <svg
                              class='MuiSvgIcon-root MuiSvgIcon-fontSize24px css-jpbqk9 rating'
                              focusable='false'
                              aria-hidden='true'
                              viewBox='0 0 24 24'
                              data-testid='StarIcon'
                            >
                              <path d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
                            </svg>
                          </div>
                        </div>
                        <span className='  fw-normal  text-secondary fs-6'>
                          {e.numrev} Ratings & {e.numrev} Reviews
                        </span>
                      </div>
                      {/* price */}
                      <h2 className='fs-6 mt-2 fw-normal text-success '>
                        Special Price
                      </h2>
                      <h1 className=' fw-bold fs-3'>
                        Rs. {e.price}
                        <del className=' mx-3 text-secondary fw-bold fs-6'>
                          {' '}
                          Rs.{e.cureted_price}
                        </del>
                        <span className=' text-success '>
                          {(
                            ((e.cureted_price - e.price) / e.cureted_price) *
                            100
                          ).toFixed(2)}
                          %
                        </span>
                      </h1>
                      {/* stock */}
                      <p className='fw-normal fs-5 m-0'>
                        <span>Stock : </span>
                        {e.stock === 0 ? (
                          <span className='text-danger'>Out of Stock</span>
                        ) : (
                          e.stock
                        )}
                      </p>
                      {/* category  */}
                      <p className='fw-normal fs-5 m-0'>
                        <span>Category : </span> {e.category}
                      </p>
                      {/* offer SECTION */}
                      <div className=' border mt-3'>
                        <h2 className='p-2 border-bottom  fs-5  capitalize fw-normal'>
                          Available offers
                        </h2>
                        <ul className='d-flex flex-column '>
                          <li className=' d-flex gap-2 align-items-center'>
                            <TagFill className='text-success pe-2 fs-3' />
                            <p className='fs-6' style={{ color: '#00000096' }}>
                              Buy this Product and Get Extra ₹500 Off{' '}
                            </p>
                          </li>
                          <li className=' d-flex gap-2 align-items-center'>
                            <TagFill className='text-success pe-2 fs-3' />
                            <p className='fs-6' style={{ color: '#00000096' }}>
                              Buy this Product and Get Extra 10% cashback{' '}
                            </p>
                          </li>
                          <li className=' d-flex gap-2 align-items-center'>
                            <TagFill className='text-success pe-2 fs-3' />
                            <p className='fs-6' style={{ color: '#00000096' }}>
                              Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit
                              Card on 3 months EMI Txns, Min Txn Value ₹10,000
                            </p>
                          </li>
                          <li className=' d-flex gap-2 align-items-center'>
                            <TagFill className='text-success pe-2 fs-3' />
                            <p className='fs-6' style={{ color: '#00000096' }}>
                              Partner OfferSign-up for Flipkart Pay Later & get
                              free Times Prime Benefits worth ₹10,000*{' '}
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* rating and review */}
                      <div className=' border border-bottom-0 my-4'>
                        <h2 className='p-2 fw-normal fs-5 border-bottom'>
                          Reviews And Ratings
                        </h2>
                        {e.reviews && e.reviews.length > 0 ? (
                          e.reviews.map((elemVal, index) => {
                            return (
                              <div
                                key={index}
                                className=' d-flex flex-column gap-1 border-bottom ps-3 p-3'
                              >
                                <div className=' d-flex align-items-center'>
                                  <PersonCircle
                                    className='fs-3'
                                    style={{ color: '#0000004f' }}
                                  />
                                  <h2 className='fs-5 fw-normal capitalize px-2'>
                                    {' '}
                                    {elemVal.name}{' '}
                                  </h2>
                                  <div className=' bg-success text-white px-2 rounded-2 d-flex align-items-center gap-1'>
                                    <span className='fs-6'>
                                      {elemVal.rate.toFixed(2)}
                                    </span>
                                    <svg
                                      class='MuiSvgIcon-root MuiSvgIcon-fontSize24px css-jpbqk9 rating'
                                      focusable='false'
                                      aria-hidden='true'
                                      viewBox='0 0 24 24'
                                      data-testid='StarIcon'
                                    >
                                      <path d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <h2 className=' fs-6 fw-light'>
                                  {elemVal.Comment}
                                </h2>
                              </div>
                            )
                          })
                        ) : (
                          <div className=' p-4 border-bottom'>
                            <h1 className='fs-4 fw-normal text-center'>
                              No Reviews
                            </h1>
                          </div>
                        )}
                      </div>
                      {/* product description SECTION  */}
                      <div className=' border'>
                        <div className=' d-flex align-items-center border-bottom fw-normal'>
                          <h2 className='p-2 fs-4 fw-normal'>
                            Product Description
                          </h2>
                        </div>
                        <p
                          className='fs-6'
                          style={{ padding: '12px', lineHeight: '27px' }}
                        >
                          {e.decr}
                        </p>
                      </div>
                    </div>
                    {/* HEADING SECTION ENDS */}
                  </div>
                  {/* RIGHT SIDE ENDS*/}
                </div>
              </div>
            </>
          )
        })}
    </>
  )
}

export default ProductDetails
