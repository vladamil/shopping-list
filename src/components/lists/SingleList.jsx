import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import ListContext from '../../context/ListContext';
import ConfirmModal from '../utils/ConfirmModal';

import styles from './SingleList.module.css';

function SingleList() {
   const { listId } = useParams();
   const {
      lists,
      toggleIsCheckedProduct,
      deleteList,
      selectListToEdit,
      displayForm,
   } = useContext(ListContext);

   const [showConfirm, setShowConfirm] = useState(false);
   const navigate = useNavigate();

   // find single list based on url listId
   const list = lists.find((item) => {
      return item.id === listId;
   });

   // calc total price of all products in the list
   const total = list.products
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   // calc checked products total price in the list
   const spent = list.products
      .filter((prod) => prod.isChecked)
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   const handleEdit = () => {
      selectListToEdit(list.id);
      navigate(`/`);
      displayForm();
   };

   return (
      <div>
         <div className={styles.header}>
            <div>
               <h2>{list.title}</h2>
               <small>Created: {list.date}</small>
            </div>
            <div>
               <FaEdit className={styles['edit-icon']} onClick={handleEdit} />
            </div>
         </div>

         <div className={styles.prices}>
            <div className={`${styles.total} ${styles.spent}`}>
               <p className={styles.amount}>
                  {spent}
                  <span>rsd</span>
               </p>
               <p className={styles.small}>Total Spent</p>
            </div>
            <p style={{ color: 'gray', margin: '0 20px' }}>of</p>
            <div className={styles.total}>
               <p className={styles.amount}>
                  {total}
                  <span>rsd</span>
               </p>
               <p className={styles.small}>Total Price</p>
            </div>
         </div>

         <div className={styles['products-container']}>
            {list.products.map((prod) => {
               return (
                  <div
                     key={prod.id}
                     className={`${styles.product} ${
                        prod.isChecked && styles.checked
                     }`}
                     onClick={() => {
                        toggleIsCheckedProduct(list.id, prod.id);
                     }}
                  >
                     <p>{prod.item}</p>
                     <p>{prod.price} rsd</p>
                  </div>
               );
            })}
         </div>
         <footer className={styles.buttons}>
            <button
               className={styles.cancel}
               onClick={() => {
                  navigate('/');
               }}
            >
               BACK
            </button>
            <button onClick={() => setShowConfirm(true)}>DELETE</button>
         </footer>

         {showConfirm && (
            <ConfirmModal
               onClose={() => setShowConfirm(false)}
               fn={() => {
                  deleteList(list.id);
                  navigate('/');
               }}
            />
         )}
      </div>
   );
}

export default SingleList;
