import React, { useState } from "react";
const CreateForm = (props) => {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDesc, updateDesc] = useState("");
  let [pSwitch, updateSwitch] = useState(false);
  let [pImage, updateImage] = useState("");

  // let[userInput,updateUserInput]= useState({
  //     pName:'',
  //     pPrice: '',
  //     pDesc:'',
  //     pSwitch:'',
  //     pImage:''

  // });
  const nameInputHandler = (event) => {
    updateName(event.target.value);
    //    updateUserInput({
    //     ...userInput,
    //     pName:event.target.value});
  };
  const priceInputHandler = (event) => {
    updatePrice(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pPrice:event.target.value});
  };
  const descInputHandler = (event) => {
    updateDesc(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pDesc:event.target.value});
  };
  const switchInputHandler = (event) => {
    updateSwitch(event.target.checked);
    //    updateUserInput({
    //     ...userInput,
    //     pSwitch:event.target.value});
  };
  const imageInputHandler = (event) => {
    updateImage(event.target.value);
    //    updateUserInput({
    //     ...userInput,
    //     pImage:event.target.value});
  };
  const createProductEventHandler = (event) => {
    event.preventDefault();

    let product = {
      
      pName: pName,
      desc: pDesc,
      isAvailable: Boolean(pSwitch),
      image: pImage,
      price: Number(pPrice),
    };

    props.createProduct(product);
    //console.log(product);
    updateName(" ");
    updatePrice("");
    updateDesc("");
    updateSwitch(false);
    updateImage("");

    props.oncancel();
  };

 
  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={pName}
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="1"
          step="1"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={pDesc}
          placeholder="Product Description"
          onChange={descInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pSwitch}
          onChange={switchInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImage}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button type="button" className="btn btn-secondary" onClick={props.oncancel} >
        Cancel
      </button>
    </form>
  );
};

export default CreateForm;
