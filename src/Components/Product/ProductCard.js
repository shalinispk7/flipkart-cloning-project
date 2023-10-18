import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = (props) => {
  console.log(props)
  return (
    <div className='col-lg-3 col-md-5 h-auto border '>
      <div className='card m-3 '>
        <Link
          to={'/ProductDetails/' + props.value._id}
          className='text-decoration-none'
        >
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <div className='h-100 w-50 d-flex flex-column justify-content-center align-items-center position-relative'>
              {/* img */}
              <img
                src={props.value.images[0].url}
                className='w-100 transition'
              />
            </div>
            <div>
              <h2 className='h5 my-2 align-baseline text-black'>
                {props.title?.length > 40
                  ? props.value.title.slice(0, 40) + '...'
                  : props.value.title}
              </h2>
              <div className='d-flex align-items-center gap-3'>
                <div className='d-flex gap-3 align-items-center justify-content-center fs-6 bg-success text-white rounded-2 text-sm py-0 px-2'>
                  <h2>{props.value.rating}</h2>
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
                <h2 className='text-dark fs-6'>stock({props.value.stock})</h2>
              </div>
              <h2 className='d-flex gap-3 fs-4 fw-bold align-baseline text-black'>
                Rs.{props.value.price}
                <del className='mx-2 text-black-50 fw-bold text-sm'>
                  Rs.{props.value.cureted_price}
                </del>
                <span className='text-success align-baseline'>
                  {(
                    ((props.value.cureted_price - props.value.price) /
                      props.value.cureted_price) *
                    100
                  ).toFixed(2)}
                  %
                </span>
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
