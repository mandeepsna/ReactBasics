import CreateForm from "./CreateForm";

const CreateProduct=(props)=>
{
   const creteNewProduct=(product)=>
   {
       product={
         ...product,
         pid: (Math.floor(Math.random()*6)+10).toString()
       }   
    
    props.createProduct(product);
   }
    return (
             <div className="row" style={{ backgroundColor:'#dfede3'}}>
                <div className="col-md-10">
                    <h2 className="text-center">Adding Product </h2>
                    <CreateForm createProduct={creteNewProduct}></CreateForm>
                </div>
                   
             </div>
    );
}

export default CreateProduct;