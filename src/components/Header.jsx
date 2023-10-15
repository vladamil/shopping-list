import { useContext } from 'react';
import ListContext from '../context/ListContext';
import { FaPlus } from 'react-icons/fa6';

import styles from './Header.module.css';

function Header() {
   const { displayForm } = useContext(ListContext);

   return (
      <header className={styles.header}>
         {/* <div>
            
            LOGO
         </div> */}

         <h1>Shopping List</h1>
         <div className={styles.add} onClick={displayForm}>
            <FaPlus className={styles['add-icon']}></FaPlus>
            <p>add</p>
         </div>
      </header>
   );
}

export default Header;
