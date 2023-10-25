import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Store/ProductContext'

const CartItems = () => {
  const { productsAdded, setProductsAdded } = useContext(ProductContext)
  console.log(productsAdded)
  return (
    <>
      {Object.keys(productsAdded).map((el) => {
        return (
          <>
            <div className='container'>
              <div className='row'>
                {/* left */}
                <div className='col-lg-4'>
                  <div className='d-flex flex-column'>
                    <img src={productsAdded[el].img} />
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
                        onClick={() =>
                          setProductsAdded((prev) => ({
                            ...prev,
                            [el]: {
                              ...prev[el],
                              count: prev[el].count
                                ? prev[el].count + 1
                                : prev[el].count,
                            },
                          }))
                        }
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
                      <div className='d-flex flex-column gap-3'>
                        <h2>title</h2>
                        <p>{productsAdded[el].name}</p>
                        <p>{productsAdded[el].price}</p>
                        <p>stock:{productsAdded[el].stock}</p>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div>
                        <button className=' px-3 py-1 border border-danger rounded  fw-normal  text-dark '>
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
