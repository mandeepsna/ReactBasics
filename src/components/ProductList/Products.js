/* eslint-disable jsx-a11y/alt-text */
import ProductDetails from "./ProductDetails";
import ProductDesc from "./ProductDesc";
import "./Products.css";
const style = {
  color: "red",
};

const Products = (props) => {
   
  return (
    <div className=" d-flex rounded-4 " style={{backgroundColor:props.item.isAvailable? '#b8e368' :'#ed2626'}}>
      <div> <h2 style={{ color: "black", fontSize: 30 }}> {props.item.pName} </h2></div>
      <div><ProductDesc desc={props.item.desc} price={props.item.price}></ProductDesc> </div> 
       <div><ProductDetails imageURL={props.item.image} booleanValue={props.item.isAvailable}/> </div>
     
       </div>
    // <div className='bg-primary text-white rounded-4 mx-2 px-2 '>
    //      <p>Id: {props.item.pid}</p>
    //      <p>Name: {props.item.pName}</p>
    //      <p>Description: {props.item.desc}</p>
    //      <p>Available/Not Available: {props.item.isAvailable}</p>
    //      <img src= {props.item.image}></img>
    //      <p>Price: {props.item.price}</p>
    // 
  );
};

export default Products;
