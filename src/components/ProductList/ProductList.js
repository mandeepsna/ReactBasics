import { useState } from "react";
import Products from "./Products";

const ProductList = (props) => {

  //console.log(props.newProduct);
//  if(props.newProductList.length===0) return <h2 className="text-center">No Product Available</h2>
return props.newProductList.length===0 ? <h2 className="text-center">No Product Available</h2> :  

 (
    <div>
      { props.newProductList.map((element) => {
        return <Products item={element}></Products>;
      })}
      {/* <Products item={product[0]}></Products>
      <Products item={product[1]}></Products>
      <Products item={product[2]}></Products>
      <Products item={product[3]}></Products>
      <Products item={product[4]}></Products> */}
    </div>
  );
};

export default ProductList;
