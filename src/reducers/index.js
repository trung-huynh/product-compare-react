import { combineReducers } from 'redux'
import product from './productReducer'
import visibilityAddProductPane from './visibilityAddProductPaneReducer';

// 2 difference reduces combined
// 1 for handling product actions
// 1 for handling whether or not showing add product pane
const compareApp = combineReducers({
  product,
  visibilityAddProductPane
});

export default compareApp
