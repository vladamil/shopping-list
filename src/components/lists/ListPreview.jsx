import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import ListContext from '../../context/ListContext';

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
               <Link to={list.id} className={styles.link}>
                  <h3>{list.title}</h3>
               </Link>
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
