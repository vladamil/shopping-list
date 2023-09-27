import { useContext } from 'react';
import ListContext from '../../context/ListContext';

function Lists() {
   const { lists } = useContext(ListContext);

   return (
      <div>
         <ul>
            {/* TODO: Add single list items like links to their pages */}
            {lists.map((list) => (
               <li key={list.id}>{list.title}</li>
            ))}
         </ul>
      </div>
   );
}

export default Lists;
