import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './Header.css'

const Header = () => {
  return (
    <section className='bg-primary '>
      <div className='container'>
        <div className='d-flex justify-content-center align-items-center header-list py-4 px-1 '>
          <div>
            <a href='#'>FlipKart</a>
            <h6 className='text-white fw-light fst-italic'>
              Explore
              <span className='opacity-1  ps-1 text-warning'>
                Plus
                {/* <svg
                  class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06'
                  focusable='false'
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  data-testid='StarOutlineIcon'
                >
                  <path d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'></path>
                </svg> */}
              </span>
            </h6>
          </div>
          <div className='search-bar'>
            <input
              type='text'
              placeholder='search for products and more...'
              className='outline-none w-100 p-2'
            />
          </div>
          <div>
            <a href='#'>Prem Kumar</a>
          </div>
          <div>
            <a href='#'>Become a Seller</a>
          </div>
          <div>
            <a href='#'>More</a>
          </div>
          <div>
            <a href='#'>Cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
