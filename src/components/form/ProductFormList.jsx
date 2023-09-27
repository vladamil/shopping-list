import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import ListContext from '../../context/ListContext';

import styles from './ProductFormList.module.css';

function ProductFormList() {
   const { productsList, deleteProductFromList } = useContext(ListContext);
   return (
      <ul className={styles['prod-list']}>
         {productsList.map((prod) => {
            return (
               <li className={styles['prod-item']} key={prod.id}>
                  <span>{prod.item}</span>
                  <span>
                     {prod.price} rsd
                     <button
                        className={styles.delete}
                        onClick={() => deleteProductFromList(prod.id)}
                     >
                        <FaTrashAlt />
                     </button>
                  </span>
               </li>
            );
         })}
      </ul>
   );
}

export default ProductFormList;
