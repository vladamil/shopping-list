import AddProductForm from './AddProductForm';

function Form() {
   return (
      <>
         <div className="form">
            <input
               type="text"
               name="title"
               id="title"
               placeholder="Enter list title"
            />
            <div>TOTAL PRICE</div>
            <AddProductForm />
            <div>LIST</div>
            <div>BUTTONS</div>
         </div>
      </>
   );
}

export default Form;
