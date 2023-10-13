import { useContext } from 'react';
import ListContext from '../../context/ListContext';
import { FaTrashAlt } from 'react-icons/fa';

import styles from './ListPreview.module.css';

function ListPreview({ list }) {
   const total = list.products
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   const { deleteList } = useContext(ListContext);

   return (
      <div className={styles.list}>
         <div className={styles.content}>
            <div>
               <h3>{list.title}</h3>
               <p className={styles.date}>Created: 21-11-2023</p>
               <p>total: {total} rsd</p>
            </div>
            <div>
               <FaTrashAlt
                  className={styles.icon}
                  onClick={() => {
                     deleteList(list.id);
                  }}
               />
            </div>
         </div>
      </div>
   );
}

export default ListPreview;
