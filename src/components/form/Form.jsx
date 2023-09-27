import { useContext, useState } from 'react';
import ListContext from '../../context/ListContext';
import AddProductForm from './AddProductForm';
import ProductFormList from './ProductFormList';

import styles from './Form.module.css';

function Form() {
   const [title, setTitle] = useState('');

   const { productsList, clearProducts, hideForm, addList } =
      useContext(ListContext);

   const total = productsList
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   return (
      <>
         <div className={styles.form}>
            <div className={styles['form-field']}>
               <input
                  autoComplete="off"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter list title"
                  value={title}
                  onChange={(e) => {
                     setTitle(e.target.value);
                  }}
               />
            </div>
            <div className={styles.total}>
               <p className={styles.amount}>
                  {total}
                  <span>rsd</span>
               </p>
               <p className={styles.small}>Total Price</p>
            </div>
            <AddProductForm />
            <ProductFormList />
            <div>
               <button
                  onClick={() => {
                     hideForm();
                     clearProducts();
                  }}
               >
                  CANCEL
               </button>
               <button
                  onClick={() => {
                     addList(title, productsList);
                     hideForm();
                     clearProducts();
                  }}
               >
                  FINISH LIST
               </button>
            </div>
         </div>
      </>
   );
}

export default Form;
