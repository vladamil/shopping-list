import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListContext from '../context/ListContext';
import { FaPlus } from 'react-icons/fa6';

import styles from './Header.module.css';

function Header() {
   const { displayForm, showForm } = useContext(ListContext);
   const navigate = useNavigate();

   const handleClick = () => {
      displayForm();
      navigate('/');
   };

   return (
      <header className={styles.header}>
         <h1>Shopping List</h1>
         {!showForm && (
            <div className={styles.add} onClick={handleClick}>
               <FaPlus className={styles['add-icon']}></FaPlus>
               <p>add</p>
            </div>
         )}
      </header>
   );
}

export default Header;
