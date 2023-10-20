import { useContext } from 'react';
import ListPreview from './ListPreview';
import ListContext from '../../context/ListContext';

import styles from './Lists.module.css';

function Lists() {
   const { lists } = useContext(ListContext);

   return (
      <div className={styles['lists-container']}>
         {lists.map((list) => (
            <ListPreview key={list.id} list={list} />
         ))}
      </div>
   );
}

export default Lists;
