import * as types from '../constants/types'

export const getProducts = () =>
  dispatch =>
    fetch(`products.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        })
      });

export const compare = product => ({
  type: types.COMPARE_PRODUCT,
  product
});

export const showAddProductPane = () => ({
  type: types.SHOW_ADD_PRODUCT_PANE
});

export const hideAddProductPane = () => ({
  type: types.HIDE_ADD_PRODUCT_PANE
});

export const addProduct = product => ({
  type: types.DO_ADD_PRODUCT,
  product
});
