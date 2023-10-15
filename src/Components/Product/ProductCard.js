import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  console.log(props)
  return (
    <Link
      className='col-lg-3 col-md-5 h-50'
      to={'/ProductDetails/' + props.value._id}
    >
      <div>
        <div className='w-50 '>
          <img src={props.value.images[0].url} className='w-100' />
        </div>
        <p>
          {props.title?.length > 40
            ? props.title.slice(0, 40) + '...'
            : props.title}
        </p>
        <div>
          <p>rating:{props.value.rating}</p>
        </div>
        <p>
          Rs.{props.value.price}
          <del>Rs.{props.value.cureted_price}</del>
          <span>
            {(
              ((props.value.cureted_price - props.value.price) /
                props.value.cureted_price) *
              100
            ).toFixed(2)}
            %
          </span>
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
