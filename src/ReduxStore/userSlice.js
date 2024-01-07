import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    productsAdded: {},
    searchText: '',
    userInfo: '',
  },
  reducers: {
    setProductsAdded: (state, action) => {
      // switch (action.type) {
      //   case 'REMOVE_ITEM':
      //     let updatedobj = state.productsAdded
      //     delete updatedobj[action.payload]
      //     state.productsAdded = updatedobj
      //     break

      //   case 'INCREASE_COUNT':
      //     state.productsAdded = {
      //       ...state.productsAdded,
      //       [action.payload]: {
      //         ...state.productsAdded[action.payload],
      //         count: state.productsAdded[action.payload].count
      //           ? state.productsAdded[action.payload] + 1
      //           : state.productsAdded[action.payload] + 1,
      //       },
      //     }
      //     break

      //   case 'DECREASE_COUNT':
      //     state.productsAdded = {
      //       ...state.productsAdded,
      //       [action.payload]: {
      //         ...state.productsAdded[action.payload],
      //         count: state.productsAdded[action.payload].count
      //           ? state.productsAdded[action.payload] - 1
      //           : 0,
      //       },
      //     }
      //     break

      //   case 'CART_UPDATE':
      //     state.productsAdded = {
      //       ...state.productsAdded,
      //       [action.payload._id]: {
      //         name: action.payload.title,
      //         curetedprice: action.payload.cureted_price,
      //         price: action.payload.price,
      //         img: action.payload.images[0].url,
      //         stock: action.payload.stock,
      //         rating: action.payload.rating,
      //         count: state.productsAdded[action.payload._id]
      //           ? state.productsAdded[action.payload._id].count + 1
      //           : 1,
      //       },
      //     }

      //   default:
      //     state.productsAdded = state.productsAdded
      // }
      state.productsAdded = {
        ...state.productsAdded,
        [action.payload._id]: {
          name: action.payload.title,
          curetedprice: action.payload.cureted_price,
          price: action.payload.price,
          img: action.payload.images[0].url,
          stock: action.payload.stock,
          rating: action.payload.rating,
          count: state.productsAdded[action.payload._id]
            ? state.productsAdded[action.payload._id].count + 1
            : 1,
        },
      }
    },
    setRemoveItem: (state, action) => {
      let updatedobj = state.productsAdded
      delete updatedobj[action.payload]
      state.productsAdded = updatedobj
    },
    setCountIncrease: (state, action) => {
      state.productsAdded = {
        ...state.productsAdded,
        [action.payload]: {
          ...state.productsAdded[action.payload],
          count: state.productsAdded[action.payload].count + 1,
        },
      }
    },
    setCountDecrease: (state, action) => {
      state.productsAdded = {
        ...state.productsAdded,
        [action.payload]: {
          ...state.productsAdded[action.payload],
          count: state.productsAdded[action.payload].count
            ? state.productsAdded[action.payload].count - 1
            : 0,
        },
      }
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setRemoveUser: (state, action) => {
      state.userInfo = null
    },
  },
})

export const {
  setProductsAdded,
  setSearchText,
  setUserInfo,
  setCountDecrease,
  setRemoveItem,
  setCountIncrease,
  setRemoveUser,
} = userSlice.actions
export default userSlice.reducer
