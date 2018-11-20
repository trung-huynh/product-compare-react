import React from 'react'
import './styles.css'

const NewProduct = ({submit, cancel}) => {
  let name;
  let description;
  let price;
  let colors = [];
  let condition;

  function handleProductNameChange(event) {
    name = event.target.value;
  }

  function handleProductDescriptionChange(event) {
    description = event.target.value;
  }

  function handleProductPriceChange(event) {
    price = event.target.value;
  }

  function handleProductColorsChange(event) {
    // state should be immutable
    colors = event.target.checked
      ? [...colors, event.target.value]
      : colors.filter(value => value !== event.target.value);
  }

  function handleProductConditionChange(event) {
    condition = event.target.value;
  }

  function handleSubmit() {
    // id will be randomize
    let id = Math.floor((Math.random() * 10000) + 1);

    // image will be static assigned
    let image = 'images/avocado.jpg';

    submit({
      id,
      image,
      name,
      description,
      price: `$${price}`,
      colors,
      condition
    });

    // close pane once submitted
    cancel();
  }

  return (
    <form className="add-product">
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" onChange={handleProductNameChange} />
        </div>
        <div className="form-group col-md-8">
          <label>Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description" onChange={handleProductDescriptionChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Price</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input type="number" className="form-control" id="price" placeholder="Price" onChange={handleProductPriceChange} />
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Colors</label>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="colors_red" value="red" onChange={handleProductColorsChange} />
              <span className="product_color bg-red" />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="colors_green" value="green" onChange={handleProductColorsChange} />
              <span className="product_color bg-green" />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="colors_blue" value="blue" onChange={handleProductColorsChange} />
              <span className="product_color bg-blue" />
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label>Condition</label>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="condition" id="condition_fresh" value="Fresh" onChange={handleProductConditionChange} />
              <label className="form-check-label">Fresh</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="condition" id="condition_frozen" value="Frozen" onChange={handleProductConditionChange} />
              <label className="form-check-label">Frozen</label>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-form col-md-12">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        <button type="button" className="btn btn-secondary" onClick={() => {cancel()}}>Cancel</button>
      </div>
    </form>
  )
}

export default NewProduct;
