import * as types from '../constants/types'

const INITIAL_STATE = {
  products: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state, products: action.payload.map(product =>
          ({...product, compare: false})
        )
      };
    case types.COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map(product =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      };
    case types.DO_ADD_PRODUCT:
      return {
        ...state, products: [...state.products, action.product]
      };
    default:
      return state
  }
}
