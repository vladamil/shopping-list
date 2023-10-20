import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import ListContext from '../../context/ListContext';

function SingleList() {
   const { listId } = useParams();
   const { lists } = useContext(ListContext);

   // find single list based on url listId
   const list = lists.find((item) => {
      return item.id === listId;
   });

   return <div>SingleList {list.title}</div>;
}

export default SingleList;
