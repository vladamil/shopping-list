import { useContext } from 'react';
import ListContext from '../context/ListContext';

function ProductFormList() {
   const { productsList, deleteProductFromList } = useContext(ListContext);
   return (
      <ul>
         {productsList.map((prod) => {
            return (
               <li key={prod.id}>
                  {prod.item} {prod.price}rsd
                  <button onClick={() => deleteProductFromList(prod.id)}>
                     X
                  </button>
               </li>
            );
         })}
      </ul>
   );
}

export default ProductFormList;
