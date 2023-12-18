import { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import cart from '../../Assets/svg/cart.svg'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../../Store/ProductContext'
import { Person, InboxFill, CaretDownFill, Search } from 'react-bootstrap-icons'
import Dropdown from 'react-bootstrap/Dropdown'

const Header = () => {
  const { productsAdded, searchText, setSearchText } =
    useContext(ProductContext)
  const [userInput, setUserInput] = useState('')
  return (
    <section className='bg-primary '>
      <div className='container'>
        <div className='row d-flex align-items-center p-2'>
          <div className='col-lg-5'>
            <div className='row d-flex align-items-center '>
              <div className='col-lg-3'>
                <NavLink to={'/'}>
                  <a
                    href='#'
                    className='fs-5 text-white text-decoration-none fw-bold'
                  >
                    Flipkart
                  </a>
                </NavLink>

                <h6 className='text-white fw-light fst-italic'>
                  Explore<span className='text-warning ps-1'>Plus</span>
                </h6>
              </div>
              <div className='col-lg-9'>
                <div className='d-flex align-items-center justify-content-around gap-3 bg-light border-none'>
                  <Search
                    className='pe-1 ps-1 fw-bold fs-3'
                    onClick={() => {
                      setSearchText(userInput)
                    }}
                  />
                  <input
                    className='border-none outline-none form-control'
                    list='datalistOptions'
                    id='exampleDataList'
                    placeholder='search for products and more...'
                    type='text'
                    value={userInput}
                    onChange={(e) => {
                      setUserInput(e.target.value)
                    }}
                  />
                </div>
                {/* <datalist id='datalistOptions'>
                  <option value='Laptop' />
                  <option value='Mobile phones' />
                  <option value='Shoes' />
                  <option value='Women Clothings' />
                  <option value='Sand disc' />
                </datalist> */}
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
                <Link to={'/seller'}>
                  <h2 className='fw-bold fs-5 text-light '>
                    <InboxFill className='pe-2 fs-3' />
                    Become a Seller
                  </h2>
                </Link>
              </div>
              <div className='col-lg-2'>
                <Dropdown>
                  <Dropdown.Toggle className='fw-bold fs-5'>
                    {/* <h2 className='fw-bold fs-5'> */}
                    {/* <CaretDownFill className='pe-2 fs-3' /> */}
                    More
                    {/* </h2> */}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
