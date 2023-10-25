import { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  const [productsAdded, setProductsAdded] = useState({})

  return (
    <ProductContext.Provider value={{ productsAdded, setProductsAdded }}>
      {props.children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider
