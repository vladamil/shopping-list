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
      validationMsg,
      createValidationMsg,
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

   // RESET STATE function after add, edit or cancel list
   const reset = () => {
      hideForm();
      clearProducts();
      createValidationMsg('');
   };

   // HANDLE SUBMIT FORM function with basic validaton
   const handleSubmit = () => {
      if (title.trim().length === 0 || title.trim().length > 20) {
         createValidationMsg('List title must be between 1 and 20 chars long');
         return;
      }

      if (productsList.length === 0) {
         createValidationMsg('List must contain at least one product');
         return;
      }

      if (listToEdit) {
         navigate(`/${listToEdit.id}`);
         editList(listToEdit, title);
         clearListToEdit();
         reset();
      } else {
         addList(title);
         reset();
      }
   };

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
            {validationMsg && <p>{validationMsg}</p>}
            <ProductFormList />

            <div className={styles.buttons}>
               {listToEdit ? (
                  // display cancel button for EDIT list
                  <button
                     className={styles.cancel}
                     onClick={() => {
                        navigate(`/${listToEdit.id}`);
                        clearListToEdit();
                        reset();
                     }}
                  >
                     Cancel Edit
                  </button>
               ) : (
                  // display cancel button for CREATE list
                  <button
                     className={styles.cancel}
                     onClick={() => {
                        reset();
                     }}
                  >
                     Back
                  </button>
               )}

               {listToEdit ? (
                  // display confirm button for EDIT list
                  <button onClick={handleSubmit}>Finish Edit</button>
               ) : (
                  // display confirm button for CREATE list
                  <button onClick={handleSubmit}>Finish List</button>
               )}
            </div>
         </div>
      </>
   );
}

export default Form;
