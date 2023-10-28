import { createPortal } from 'react-dom';

import styles from './ConfrimModal.module.css';

function ConfirmModal({ onClose, fn }) {
   return createPortal(
      <>
         <div className={styles.overlay} onClick={() => onClose()}></div>

         <div className={styles.modal}>
            <div className={styles['modal-content']}>
               <h3>Delete List</h3>
               <p>Are you sure you want to delete this list?</p>
               <div className={styles['btn-container']}>
                  <button
                     className={`${styles['modal-btn']} ${styles.cancel}`}
                     onClick={() => onClose()}
                  >
                     Cancel
                  </button>
                  <button
                     className={styles['modal-btn']}
                     onClick={() => {
                        onClose();
                        fn();
                     }}
                  >
                     Delete
                  </button>
               </div>
            </div>
         </div>
      </>,

      document.getElementById('confirm')
   );
}

export default ConfirmModal;
