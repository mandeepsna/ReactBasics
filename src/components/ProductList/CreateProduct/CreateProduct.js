import { useState } from "react";
import CreateForm from "./CreateForm";

const CreateProduct = (props) => {
  let [addingProduct, UpdateAddingProduct] = useState(false);
  const creteNewProduct = (product) => {
    product = {
      ...product,
      pid: (Math.floor(Math.random() * 6) + 10).toString(),
    };

    props.createProduct(product);
  };
  function onCreateProduct() {
    UpdateAddingProduct(true);
  }
  const onProductSubmittedorCancel = () => {
    UpdateAddingProduct(false);
  };
  return (
    <div className="row" style={{ backgroundColor: "#dfede3" }}>
      <div className="col-md-10">
        <h2 className="text-center">Adding Product </h2>

        {!addingProduct && (
          <button className="p-1" onClick={onCreateProduct}>
            Create Product
          </button>
        )}

        {addingProduct && (
          <CreateForm
            createProduct={creteNewProduct}
            oncancel={onProductSubmittedorCancel}
          ></CreateForm>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
