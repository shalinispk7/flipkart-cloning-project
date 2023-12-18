import { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  const [productsAdded, setProductsAdded] = useState({})
  const [searchText, setSearchText] = useState('')
  return (
    <ProductContext.Provider
      value={{ productsAdded, setProductsAdded, searchText, setSearchText }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider
