import { useContext, useState } from 'react';
import ListContext from '../../context/ListContext';

import styles from './AddProductForm.module.css';

function AddProductForm() {
   const [product, setProduct] = useState('');
   const [price, setPrice] = useState('');

   const { addProductToList, createValidationMsg } = useContext(ListContext);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (product.trim().length === 0 || product.trim().length > 25) {
         createValidationMsg('Product must be between 1 and 25 chars long');
         return;
      }

      if (price <= 0) {
         createValidationMsg('Price must be a positive number');
         return;
      }

      addProductToList(product, price);
      setProduct('');
      setPrice('');
      createValidationMsg('');
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className={styles['form-field']}>
            <input
               autoComplete="off"
               type="text"
               name="product"
               id="product"
               placeholder="Enter product and quantity"
               value={product}
               onChange={(e) => setProduct(e.target.value)}
            />
         </div>
         <div className={`${styles['form-field']} ${styles.number}`}>
            <input
               type="number"
               step={0.01}
               name="price"
               id="price"
               placeholder="Enter total price"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
            />
            <span className={styles.currency}>rsd</span>
         </div>

         <button className={styles.btn} type="submit">
            Add Product
         </button>
      </form>
   );
}

export default AddProductForm;
