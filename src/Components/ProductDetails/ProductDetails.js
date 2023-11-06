import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  allProducts,
  womenProducts,
  electronicProducts,
} from '../Product/ProductData'
import cart from '../../Assets/svg/cart.svg'
// import buynow from '../../Assets/svg/buynow.svg'
import {
  BagHeart,
  TagFill,
  PersonCircle,
  Apple,
  Person,
} from 'react-bootstrap-icons'
import './ProductDetails.css'
import { ProductContext } from '../../Store/ProductContext'
import { useContext } from 'react'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { productsAdded, setProductsAdded } = useContext(ProductContext) //productcontext la erunthu yethu use panromo athu left side then use contextla enga erunthu yeduthutu varamo athu podanum

  const cartUpdate = (e) => {
    const cartproduct = allProducts.filter(
      //yentha product click panramo atha matu filter pani cart component ku yeduthutu pogum
      (ev) => ev._id === e.target.getAttribute('data-prd-id')
    )

    // console.log(cartproduct)
    setProductsAdded((prev) => ({
      ...prev,
      [e.target.getAttribute('data-prd-id')]: {
        name: cartproduct[0].title,
        curetedprice: cartproduct[0].cureted_price,
        price: cartproduct[0].price,
        img: cartproduct[0].images[0].url,
        stock: cartproduct[0].stock,
        rating: cartproduct[0].rating,
        count: prev[e.target.getAttribute('data-prd-id')]?.count
          ? prev[e.target.getAttribute('data-prd-id')].count + 1
          : 1,
      },
    }))
  }

  const AddToCart = (e) => {
    cartUpdate(e)
  }
  const BuyNow = (e) => {
    cartUpdate(e)
    navigate('/checkout')
  }
  useEffect(() => {
    console.log(productsAdded)
  }, [productsAdded])
  return (
    <>
      {allProducts
        .filter((e) => e._id === id) //clicked equal to products id
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
                          data-prd-id={e._id}
                          onClick={(event) => AddToCart(event)}
                        >
                          {/* <img src={cart} className='pe-2' /> */}
                          ADD TO CART
                        </button>
                        <button
                          className='w-100 buybtn buy'
                          data-prd-id={e._id}
                          onClick={(event) => BuyNow(event)}
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
            // <>
            //   <div className='d-flex flex-column'>
            //     <div className='p-3 d-flex bg-white row'>
            //       {/* LEFT SIDE STARTS*/}
            //       <div className=' flex-1 d-flex flex-column p-6 col-lg-4'>
            //         <div className='t-20 position-sticky'>
            //           <img
            //             loading='lazy'
            //             className='hover:scale-105 cursor-pointer transition-all mx-auto w-80'
            //             src={e.images[0].url}
            //             alt='imgage'
            //           />
            //           <div className=' my-8 d-flex align-items-center gap-4 justify-content-between'>
            //             <button
            //               className='w-100 buybtn'
            //               onClick={() => AddToCart()}
            //             >
            //               <img src={cart} className='pe-2' />
            //               ADD TO CART
            //             </button>
            //             <button
            //               className='w-100 buybtn buy'
            //               onClick={() => BuyNow()}
            //             >
            //               <BagHeart className='pe-2 fs-4' />
            //               BUY NOW
            //             </button>
            //           </div>
            //         </div>
            //       </div>
            //       {/* RIGHT SIDE STARTS*/}
            //       <div className='p-4 px-8  col-lg-8'>
            //         {/* HEADIND SECTION */}
            //         <div className='d-flex flex-column gap-2'>
            //           <h1 className='capitalize text-xl fw-semibold'>
            //             {e.title}
            //           </h1>
            //           {/* rating */}
            //           <div className='d-flex gap-4 align-items-center'>
            //             <div className='fw-bold d-flex gap-1 align-items-center bg-success text-white px-2 '>
            //               <h1>{e.rating}</h1>
            //             </div>
            //             <h1 className=' text-gray text-sm fw-bold'>
            //               {e.numrev} Ratings & {e.numrev}reviews
            //             </h1>
            //           </div>
            //           {/* price */}
            //           <h1 className=' text-sm fw-bold text-success '>
            //             Special Price
            //           </h1>
            //           <h1 className=' fw-bold text-3xl'>
            //             Rs. {e.price}
            //             <del className=' mx-4 text-gray fw-bold text-sm'>
            //               {' '}
            //               Rs.{e.cureted_price}
            //             </del>
            //             <span className=' text-success text-base'>
            //               {(
            //                 ((e.cureted_price - e.price) / e.cureted_price) *
            //                 100
            //               ).toFixed(2)}
            //               %
            //             </span>
            //           </h1>
            //           {/* stock0 */}
            //           <p className='  text-lg fw-bold capitalize '>
            //             <span>Stock : </span>
            //             {e.stock === 0 ? (
            //               <span className='text-red-400'>out of stock</span>
            //             ) : (
            //               e.stock
            //             )}{' '}
            //           </p>
            //           {/* category */}
            //           <p className='  text-lg fw-bold capitalize '>
            //             <span>category : </span> {e.category}{' '}
            //           </p>
            //         </div>
            //         {/* OFFER SECTION */}
            //         <div className=' border my-4'>
            //           <h1 className=' border-b p-3 text-lg fw-bold capitalize'>
            //             Available offers
            //           </h1>
            //           <ul className='d-flex flex-column p-4 gap-3'>
            //             <li className=' d-flex gap-3 align-items-center'>
            //               {/* <SellIcon className=' text-green-600' /> */}
            //               <p>Buy this Product and Get Extra ₹500 Off </p>
            //             </li>
            //             <li className=' d-flex gap-3 align-items-center'>
            //               {/* <SellIcon className=' text-green-600' /> */}
            //               <p>Buy this Product and Get Extra 10% cashback </p>
            //             </li>
            //             <li className=' d-flex gap-3 align-items-center'>
            //               {/* <SellIcon className=' text-green-600' /> */}
            //               <p>
            //                 Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit
            //                 Card on 3 months EMI Txns, Min Txn Value ₹10,000
            //               </p>
            //             </li>
            //             <li className=' d-flex gap-3 align-items-center'>
            //               {/* <SellIcon className=' text-green-600' /> */}
            //               <p>
            //                 Partner OfferSign-up for Flipkart Pay Later & get
            //                 free Times Prime Benefits worth ₹10,000*{' '}
            //               </p>
            //             </li>
            //           </ul>
            //         </div>
            //         {/* ratings reviews */}
            //         <div className=' border border-b-0 my-4'>
            //           <h1 className=' text-xl'>Reviews And Ratings</h1>
            //           {e.reviews && e.reviews.length > 0 ? (
            //             e.reviews.map((elemVal, index) => {
            //               return (
            //                 <div
            //                   key={index}
            //                   className=' p-4 d-flex flex-column gap-4 border-b'
            //                 >
            //                   <div className=' d-flex align-items-center gap-3'>
            //                     {/* <Avatar /> */}
            //                     <h1 className=' font-bold capitalize'>
            //                       {' '}
            //                       {elemVal.name}{' '}
            //                     </h1>
            //                     <div className=' font-bold flex gap-1 w-fit items-center text-sm bg-green-700 text-white py-[.1rem] px-2 rounded-sm'>
            //                       <h1>{elemVal.rate}</h1>
            //                     </div>
            //                   </div>
            //                   <p className=' text-sm font-medium'>
            //                     {elemVal.Comment}
            //                   </p>
            //                 </div>
            //               )
            //             })
            //           ) : (
            //             <div className=' p-4 border-b'>
            //               <h1 className=' text-lg font-semibold text-center'>
            //                 No Reviews
            //               </h1>
            //             </div>
            //           )}
            //         </div>
            //         {/* product description SECTION */}
            //         <div className=' border'>
            //           <div className='p-4 d-flex align-items-center border-b fw-bold'>
            //             <h1 className=' text-2xl'>Product Description</h1>
            //           </div>
            //           <p className='p-4 text-sm leading-6'>{e.decr}</p>
            //         </div>
            //       </div>
            //       {/* RIGHT SIDE ENDS */}
            //     </div>
            //   </div>
            // </>
          )
        })}
    </>
  )
}

export default ProductDetails