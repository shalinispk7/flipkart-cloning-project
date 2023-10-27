import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import cart from '../../Assets/svg/cart.svg'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './Header.css'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Store/ProductContext'
import { useContext } from 'react'
import { Person } from 'react-bootstrap-icons'
import { Inbox } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { productsAdded, setProductsAdded } = useContext(ProductContext)

  return (
    <section className='bg-primary '>
      <div className='container'>
        <div className='row d-flex align-items-center p-2'>
          <div className='col-lg-5'>
            <div className='row d-flex align-items-center '>
              <div className='col-lg-4'>
                <NavLink to={'/'}>
                  <a href='#' className='fs-5 text-white text-decoration-none'>
                    Flipkart
                  </a>
                </NavLink>

                <h6 className='text-white fw-light fst-italic'>
                  Explore<span className='text-warning ps-1'>Plus</span>
                </h6>
              </div>
              <div className='col-lg-8'>
                <input
                  class='form-control'
                  list='datalistOptions'
                  id='exampleDataList'
                  placeholder='search for products,brands and more...'
                />
                <datalist id='datalistOptions'>
                  <option value='San Francisco' />
                  <option value='New York' />
                  <option value='Seattle' />
                  <option value='Los Angeles' />
                  <option value='Chicago' />
                </datalist>
                {/* <input
                  type='text'
                  placeholder='search for products and more...'
                  className='p-1 outline-0 border-none w-100 '
                /> */}
              </div>
            </div>
          </div>
          <div className='col-lg-7 text-light text-start'>
            <div className='row'>
              <div className='col-lg-3'>
                <button className='text-primary border-0 px-3  fs-5 fw-bold d-flex align-items-center'>
                  <Person className='pe-2 fs-3' />
                  Login
                </button>
              </div>
              <div className='col-lg-4'>
                <h2 className='fw-bold fs-5'>
                  <Inbox className='pe-2 fs-3' />
                  Become a Seller
                </h2>
              </div>
              <div className='col-lg-2'>
                <h2 className='fw-bold fs-5'>More</h2>
              </div>
              <div className='col-lg-3'>
                <Link to={'/cart'}>
                  <div className='fw-bold fs-5 text-light'>
                    <img src={cart} className='pe-2' />
                    Cart<span> ({Object.keys(productsAdded).length})</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
