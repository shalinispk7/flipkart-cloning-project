import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = (props) => {
  console.log(props)
  return (
    <div className='col-lg-3 mb-3'>
      <div className='card' style={{ height: '60vh', paddingTop: '12px' }}>
        <Link
          to={'/ProductDetails/' + props.value._id}
          className='text-decoration-none d-flex flex-column gap-2 align-items-center justify-content-center'
        >
          <div className='w-50 trans-img'>
            <img
              src={props.value.images[0].url}
              className='card-img-top w-100'
              style={{ height: '12rem' }}
              alt='...'
            />
          </div>
          <div className='card-body d-flex  flex-column gap-1 align-items-start justify-content-center'>
            <h2 className='card-text text-black fw-normal fs-6'>
              {/* {props.title?.length > 40
                ? props.value.title.slice(0, 40) + '...'
                : props.value.title} */}
              {props.value.title.slice(0, 40) + '...'}
            </h2>
            <div className='d-flex align-items-center gap-2 justify-content-center'>
              <div className='d-flex gap-1 align-items-center justify-content-center fs-6 bg-success text-white rounded-2 py-0 px-2'>
                <span className='fw-normal' style={{ fontSize: '1rem' }}>
                  {props.value.rating.toFixed(2)}
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
              <h2 className='text-dark fw-normal fs-6'>
                stock({props.value.stock})
              </h2>
            </div>
            <h2 className='d-flex gap-3 fw-normal fs-6 align-baseline text-black'>
              Rs.{props.value.price}
              <del className='mx-2 text-black-50 fw-normal fs-6'>
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
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
