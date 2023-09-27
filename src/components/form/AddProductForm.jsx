import { useContext, useState } from 'react';
import ListContext from '../../context/ListContext';

import styles from './AddProductForm.module.css';

function AddProductForm() {
   const [product, setProduct] = useState('');
   const [price, setPrice] = useState('');
   const [isChem, setIsChem] = useState(false);

   const { addProductToList } = useContext(ListContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      addProductToList(product, price, isChem);
      setProduct('');
      setPrice('');
      setIsChem(false);
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
               name="price"
               id="price"
               placeholder="Enter total price"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
            />
            <span className={styles.currency}>rsd</span>
         </div>
         <div className={styles['form-field']}>
            <input
               type="checkbox"
               name="chem"
               id="chem"
               checked={isChem}
               onChange={(e) => setIsChem(e.target.checked)}
            />
            <label htmlFor="chem">is Chemistry</label>
         </div>
         <button className={styles.btn} type="submit">
            Add Product
         </button>
      </form>
   );
}

export default AddProductForm;
