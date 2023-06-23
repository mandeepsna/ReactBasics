import "./App.css";
import CreateProduct from "./components/ProductList/CreateProduct/CreateProduct";
import ProductList from "./components/ProductList/ProductList";
import React, { useState } from "react";

function App() {

  let[newPro,updateProduct] =useState(null);
  const newProduct=(product)=>
  {
       updateProduct(product);
     // console.log(product);
  }
  
  return (
   <div>
 
  <CreateProduct createProduct={newProduct}></CreateProduct>
  <ProductList  newProduct={newPro}></ProductList>
  </div>
  );
}
export default App;
