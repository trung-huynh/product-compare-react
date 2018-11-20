import * as types from '../constants/types'

export default function (state = false, action) {
  switch (action.type) {
    case types.SHOW_ADD_PRODUCT_PANE:
      return true;
    case types.HIDE_ADD_PRODUCT_PANE:
      return false;

    default:
      return state
  }
}
