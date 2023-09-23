import { useContext } from 'react';
import ListContext from '../context/ListContext';
import AddProductForm from './AddProductForm';
import ProductFormList from './ProductFormList';

function Form() {
   const { productsList } = useContext(ListContext);

   const total = productsList
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   return (
      <>
         <div className="form">
            <input
               type="text"
               name="title"
               id="title"
               placeholder="Enter list title"
            />
            <div>TOTAL PRICE: {total} rsd</div>
            <AddProductForm />
            <ProductFormList />
            <div>BUTTONS</div>
         </div>
      </>
   );
}

export default Form;
