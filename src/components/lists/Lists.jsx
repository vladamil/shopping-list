import { useContext } from 'react';
import ListPreview from './ListPreview';
import ListContext from '../../context/ListContext';
import logo from '../../img/logo.png';

import styles from './Lists.module.css';

function Lists() {
   const { lists, displayForm } = useContext(ListContext);

   if (!lists || lists.length === 0) {
      return (
         <div className={styles.empty}>
            <h2>Welcome to your Shopping List</h2>
            <p>No shopping lists yet!</p>
            <img src={logo} alt="logo" />
            <p className={styles.moto}>It is time to go shopping!!</p>
            <p className={styles.link} onClick={() => displayForm()}>
               Create new list
            </p>
         </div>
      );
   }

   return (
      <div className={styles['lists-container']}>
         {lists.map((list) => (
            <ListPreview key={list.id} list={list} />
         ))}
      </div>
   );
}

export default Lists;
