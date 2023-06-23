import React from "react";
const ProductDesc=(Props)=>
{
      return(
        <div > 
       <div>  <p className=''>{Props["desc"]}</p></div>
       <div>  <p> Price : $ {Props.price}</p> </div> 
        </div>
    );
// return React.createElement('div',{},
//              React.createElement('p',{className:''}, Props["desc"]),
//              React.createElement('p',{}, "$" +Props.price),

// )
}
export default ProductDesc;