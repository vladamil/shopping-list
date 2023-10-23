import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import ListContext from '../../context/ListContext';

import styles from './ListPreview.module.css';

function ListPreview({ list }) {
   // calc total for all prod in the list
   const total = list.products
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   const { deleteList } = useContext(ListContext);
   const navigate = useNavigate();

   return (
      <div className={styles.list}>
         <div className={styles.content}>
            <div
               onClick={() => {
                  navigate(`${list.id}`);
               }}
            >
               <h3>{list.title}</h3>
               <p className={styles.date}>Created: {list.date}</p>
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
