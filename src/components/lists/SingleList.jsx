import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ListContext from '../../context/ListContext';

import styles from './SingleList.module.css';

function SingleList() {
   const { listId } = useParams();
   const { lists, toggleIsCheckedProduct } = useContext(ListContext);
   const navigate = useNavigate();

   // find single list based on url listId
   const list = lists.find((item) => {
      return item.id === listId;
   });

   return (
      <div>
         <div className={styles.header}>
            <h2>{list.title}</h2>
            <small>Created: {list.date}</small>
         </div>

         <div className={styles.prices}>
            <div className={`${styles.total} ${styles.spent}`}>
               <p className={styles.amount}>
                  0.00
                  <span>rsd</span>
               </p>
               <p className={styles.small}>Total Spent</p>
            </div>
            <p style={{ color: 'gray', margin: '0 20px' }}>of</p>
            <div className={styles.total}>
               <p className={styles.amount}>
                  11577.00
                  <span>rsd</span>
               </p>
               <p className={styles.small}>Total Price</p>
            </div>
         </div>

         <div>
            {list.products.map((item) => {
               return (
                  <p
                     key={item.id}
                     style={{ color: item.isChecked ? 'red' : 'blue' }}
                     onClick={() => {
                        toggleIsCheckedProduct(list.id, item.id);
                     }}
                  >
                     {item.item}
                  </p>
               );
            })}
         </div>
         <footer>
            <button
               onClick={() => {
                  navigate('/');
               }}
            >
               BACK
            </button>
            <button>DELETE</button>
         </footer>
      </div>
   );
}

export default SingleList;
