import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Store/ProductContext'

const CartItems = () => {
  const { productsAdded, setProductsAdded } = useContext(ProductContext)
  console.log(productsAdded)
  const removeItem = (keyToRemove) => {
    const updatedobj = { ...productsAdded }
    delete updatedobj[keyToRemove]
    setProductsAdded(updatedobj)
  }
  return (
    <>
      {Object.keys(productsAdded).map((el) => {
        return (
          <>
            <div className='container'>
              <div className='row mt-4'>
                {/* left */}
                {console.log(el)}

                <div className='col-lg-4 d-flex justify-content-center'>
                  <div className='d-flex flex-column' style={{ width: '45%' }}>
                    <img className='w-100' src={productsAdded[el].img} />
                    <div>
                      <button
                        onClick={() =>
                          // setProductsAdded(
                          //   (prev) => ...prev,prev.productsAdded[el].count - 1
                          // )
                          setProductsAdded((prev) => ({
                            ...prev,
                            [el]: {
                              ...prev[el],
                              count: prev[el].count ? prev[el].count - 1 : 0,
                            },
                          }))
                        }
                        className='  p-1 px-4 border border-light rounded '
                        disabled={productsAdded[el].count <= 0}
                      >
                        -
                      </button>
                      <input
                        value={productsAdded[el].count}
                        type='text'
                        style={{
                          width: '40px',
                          textAlign: 'center',
                          outline: 'none',
                          color: 'red',
                        }}
                        className=' border border-light rounded '
                      />
                      <button
                        onClick={() => {
                          console.log(productsAdded)
                          setProductsAdded((prev) => ({
                            ...prev,
                            [el]: {
                              ...prev[el],
                              count: prev[el].count
                                ? prev[el].count + 1
                                : prev[el].count + 1,
                            },
                          }))
                        }}
                        className='p-1 px-4 border border-light rounded'
                        disabled={
                          productsAdded[el].count >= productsAdded[el].stock
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* right details */}
                <div className='col-lg-8'>
                  <div className='row d-flex justify-content-around align-items-center'>
                    <div className='col-lg-10'>
                      <div className='d-flex flex-column gap-2'>
                        <h2 className='fw-normal fs-5 '>
                          {productsAdded[el].name}
                        </h2>
                        <div
                          className='bg-success rounded-2'
                          style={{ width: 'fit-content' }}
                        >
                          <div className='d-flex align-items-center gap-2 p-1 text-light '>
                            <span
                              className='fw-normal'
                              style={{ fontSize: '1rem' }}
                            >
                              {productsAdded[el].rating.toFixed(2)}
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
                        <h2 className='fw-normal fs-5'>
                          Rs. {productsAdded[el].price}
                          <del className=' mx-3 text-secondary fw-bold fs-6'>
                            {' '}
                            Rs.{productsAdded[el].curetedprice}
                          </del>
                          <span className=' text-success '>
                            {(
                              ((productsAdded[el].curetedprice -
                                productsAdded[el].price) /
                                productsAdded[el].curetedprice) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </h2>
                        <h2 className='fw-normal fs-5 '>
                          Stock: {productsAdded[el].stock}
                        </h2>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div>
                        <button
                          onClick={() => removeItem(el)}
                          className=' px-3 py-1 border border-danger rounded  fw-normal  text-dark '
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right side */}
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default CartItems
