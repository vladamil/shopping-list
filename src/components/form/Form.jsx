import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListContext from '../../context/ListContext';
import AddProductForm from './AddProductForm';
import ProductFormList from './ProductFormList';

import styles from './Form.module.css';

function Form() {
   const [title, setTitle] = useState('');

   const {
      productsList,
      clearProducts,
      hideForm,
      addList,
      listToEdit,
      clearListToEdit,
      editList,
   } = useContext(ListContext);

   const navigate = useNavigate();

   const total = productsList
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   useEffect(() => {
      if (listToEdit) {
         setTitle(listToEdit.title);
      }
   }, [listToEdit]);

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
            {/* {message && <p>{message}</p>} */}
            <ProductFormList />

            <div className={styles.buttons}>
               {listToEdit ? (
                  // display cancel button for EDIT list
                  <button
                     className={styles.cancel}
                     onClick={() => {
                        navigate(`/${listToEdit.id}`);
                        clearListToEdit();
                        hideForm();
                        clearProducts();
                     }}
                  >
                     Cancel Edit
                  </button>
               ) : (
                  // display cancel button for CREATE list
                  <button
                     className={styles.cancel}
                     onClick={() => {
                        hideForm();
                        clearProducts();
                     }}
                  >
                     Back
                  </button>
               )}

               {listToEdit ? (
                  // display confirm button for EDIT list
                  <button
                     onClick={() => {
                        navigate(`/${listToEdit.id}`);
                        editList(listToEdit, title);
                        hideForm();
                        clearProducts();
                        clearListToEdit();
                     }}
                  >
                     Finish Edit
                  </button>
               ) : (
                  // display confirm button for CREATE list
                  <button
                     onClick={() => {
                        addList(title);
                        hideForm();
                        clearProducts();
                     }}
                  >
                     Finish List
                  </button>
               )}
            </div>
         </div>
      </>
   );
}

export default Form;
