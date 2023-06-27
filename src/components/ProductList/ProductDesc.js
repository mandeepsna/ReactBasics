import React from "react";
const ProductDesc=(Props)=>
{
      return(
        <div > 
       <div>  <p className=''>{Props["desc"]}</p></div>
       <div>  <p style={{color: Props.price>=60 ? '#2c03fc':'yellow',fontSize:'20px'}}> Price : $ {Props.price}</p> </div> 
        </div>
    );
// return React.createElement('div',{},
//              React.createElement('p',{className:''}, Props["desc"]),
//              React.createElement('p',{}, "$" +Props.price),

// )
}
export default ProductDesc;