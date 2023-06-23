import Products from "./Products";
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
];
const ProductList = (props) => {
 console.log(props.newProduct);

  return (
    <div>
      <Products item={product[0]}>
      </Products>
      <Products item={product[1]}></Products>
      <Products item={product[2]}></Products>
      <Products item={product[3]}></Products>
      <Products item={product[4]}></Products>
    </div>
  );
};

export default ProductList;
