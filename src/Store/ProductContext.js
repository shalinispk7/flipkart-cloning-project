import { useState, createContext } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  const [productsAdded, setProductsAdded] = useState({})
  const [searchText, setSearchText] = useState('')
  const [userInfo, setUserInfo] = useState('')

  return (
    <ProductContext.Provider
      value={{
        productsAdded,
        setProductsAdded,
        searchText,
        setSearchText,
        userInfo,
        setUserInfo,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider
