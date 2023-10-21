import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import ListContext from '../../context/ListContext';

function SingleList() {
   const { listId } = useParams();
   const { lists } = useContext(ListContext);

   // find single list based on url listId
   const list = lists.find((item) => {
      return item.id === listId;
   });

   return (
      <div>
         <header>
            <h2>{list.title}</h2>
            <small>Created: {list.date}</small>
         </header>
         <div>
            <div>Price: 333.00</div>
            <div>Spent: 211.00</div>
         </div>
         <div>
            {list.products.map((item) => {
               return <p>{item.item}</p>;
            })}
         </div>
         <footer>
            <button>
               <Link to="/">BACK</Link>
            </button>
            <button>DELETE</button>
         </footer>
      </div>
   );
}

export default SingleList;
