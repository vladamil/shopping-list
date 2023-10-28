import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import ConfirmModal from '../utils/ConfirmModal';
import ListContext from '../../context/ListContext';

import styles from './ListPreview.module.css';

function ListPreview({ list }) {
   const [showConfirm, setShowConfirm] = useState(false);

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
               style={{ cursor: 'pointer' }}
            >
               <h3>{list.title}</h3>
               <p className={styles.date}>Created: {list.date}</p>
               <p>total: {total} rsd</p>
            </div>
            <div>
               <FaTrashAlt
                  className={styles.icon}
                  onClick={() => {
                     setShowConfirm(true);
                  }}
               />
            </div>
         </div>
         {showConfirm && (
            <ConfirmModal
               onClose={() => setShowConfirm(false)}
               fn={() => deleteList(list.id)}
            />
         )}
      </div>
   );
}

export default ListPreview;
