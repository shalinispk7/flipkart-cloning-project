import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import banner1 from '../../Assets/img/banner-1.webp'
import banner2 from '../../Assets/img/banner-2.webp'
import banner3 from '../../Assets/img/banner-3.webp'
import banner4 from '../../Assets/img/banner-4.webp'
import banner5 from '../../Assets/img/banner-5.webp'
import banner6 from '../../Assets/img/banner-6.webp'
import bank from '../../Assets/img/bank.webp'
import col1 from '../../Assets/img/col-1.webp'
import col2 from '../../Assets/img/col-2.webp'
import col3 from '../../Assets/img/col-3.webp'

const Slide = () => {
  return (
    <>
      {/* <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={banner1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner2} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner3} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner4} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner5} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner6} alt='First slide' />
        </Carousel.Item>
      </Carousel> */}
      <div>
        <img className='d-block w-75 m-auto' src={bank} alt='First slide' />
      </div>
      {/* <div className='row'>
        <img
          className='d-block w-25 m-auto col-sm'
          src={col1}
          alt='First slide'
        />
        <img
          className='d-block w-25 m-auto col-sm'
          src={col2}
          alt='First slide'
        />
        <img
          className='d-block w-25 m-auto col-sm'
          src={col3}
          alt='First slide'
        />
      </div> */}
    </>
  )
}

export default Slide
