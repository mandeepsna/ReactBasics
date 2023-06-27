import "./Products.css";
import React, { useState } from "react";
import Button from "./Button";

const btnClickedEvent = () => {
  console.log("Btn Clicked");
};

const ProductDetails = (Props) => {
  let [ProductCount, upDateCount] = useState(0);
  let dynamicClass = "badgeClass ";
  dynamicClass += Props.booleanValue ? "bg-secondary" : "bg-danger";
  const valueIncrement = () => {
    upDateCount(++ProductCount);
  };

  const valueDecrement = () => {
    upDateCount(--ProductCount);
  };
  return (
    <div className="d-flex mx-5 g-4  align-items-center">
      <div>
        <Button children="Mani" eventHandler={valueDecrement} disable={ProductCount===0?true :false}>
          -
        </Button>
      </div>
      <div>
        <span>{ProductCount}</span>
      </div>
      <div>
        <Button children="Handa" eventHandler={valueIncrement}>
          +
        </Button>
      </div>
      <div>
        <img
          src={Props.imageURL}
          width="250"
          style={{ borderRadius: 20 }}
          onClick={btnClickedEvent}
        ></img>
      </div>
      <div>
        <span className={dynamicClass}>
          {" "}
          {Props.booleanValue ? "Available" : "Not Available"}
        </span>
      </div>
    </div>
  );

  // return( React.createElement('div',{},
  //                React.createElement(Button,{children:'Mani'},'-'),
  //                React.createElement('span',{},Counter()),
  //                React.createElement(Button,{children:'Handa'},'+'),
  //                React.createElement('img',{src:Props.imageURL,className:'img',width:200,style:{borderRadius:20}}),
  //                React.createElement('span',{className:dynamicClass},Props.booleanValue ?'Available':'Not Available')
  //                )
  // );
};

export default ProductDetails;
