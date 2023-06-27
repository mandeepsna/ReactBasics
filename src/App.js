import "./App.css";
import CreateProduct from "./components/ProductList/CreateProduct/CreateProduct";
import ProductList from "./components/ProductList/ProductList";
import React, { useState } from "react";
import Filterdata from "./components/FilterData/Filterdata";

const product = [
  {
    pid: 1,
    pName: "Brocoli",
    desc: "Lorem Ipsum",
    isAvailable: true,
    image: "./images/2.webp",
    price: 20,
  },
  {
    pid: 2,
    pName: "Fresh Milk",
    desc: "Lorem ",
    isAvailable: true,
    image: "./images/1.avif",
    price: 10,
  },
  {
    pid: 3,
    pName: "Olive Oil",
    desc: "Lorem Ipsum dolor ",
    isAvailable: false,
    image: "./images/4.webp",
    price: 50,
  },
  {
    pid: 4,
    pName: "Shampoo",
    desc: "Lorem Ipsum amet",
    isAvailable: true,
    image: "./images/1.avif",
    price: 70,
  },
  {
    pid: 5,
    pName: "Potatos",
    desc: "Lorem Ipsum,consectur",
    isAvailable: false,
    image: "./images/2.webp",
    price: 60,
  },
  {
    pid: 6,
    pName: "Liza-Pol",
    desc: "Lorem Ipsum,consectur",
    isAvailable: true,
    image: "./images/3.jpg",
    price: 60,
  },
];

function App() {
  let [newProductList, updateProductList] = useState(product);

  let [newUpdatedList, UpdatedList] = useState("all");

 const filterProductList= newProductList.filter((product) => {
    if (newUpdatedList === "available") {
      return product.isAvailable=== true;
    } else if (newUpdatedList === "unavailable") {
      return (product.isAvailable === false);
    } else {
      return product;
    }
  });

  const newProduct = (product) => {
    updateProductList([...newProductList, product]);

    // console.log(product);
  };

  const FilterVauleReceived = (Filtereceived) => {
    UpdatedList(Filtereceived);
    //  console.log(Filtereceived);
  };
  return (
    <div>
      <CreateProduct createProduct={newProduct}></CreateProduct>
      <Filterdata FilterValue={FilterVauleReceived}></Filterdata>
      <ProductList newProductList={filterProductList}></ProductList>
    </div>
  );
}
export default App;
