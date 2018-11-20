import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList, NewProduct} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'

import './styles.css'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const compareProducts = this.props.products.filter(product => product.compare);
    const btnClasses = "btn btn-default btn-add-product";
    console.log(this.props);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
            <button className={btnClasses}
                    onClick={this.props.actions.showAddProductPane}>Add Product</button>
          </div>
        </div>

        {this.props.visibilityAddProductPane &&
        <NewProduct submit={this.props.actions.addProduct} cancel={this.props.actions.hideAddProductPane} />}
        <ProductList products={this.props.products} compare={this.props.actions.compare}/>
        {compareProducts.length >= 2 &&
        <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products,
    visibilityAddProductPane: state.visibilityAddProductPane
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
