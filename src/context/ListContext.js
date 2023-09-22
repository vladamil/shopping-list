import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {
   const [showForm, setShowForm] = useState(false);
   const [productsList, setProductsList] = useState([]);

   const displayForm = () => {
      setShowForm(true);
   };

   const hideForm = () => {
      setShowForm(false);
   };

   const addProductToList = (item, price, isChem) => {
      setProductsList([...productsList, { id: uuidv4(), item, price, isChem }]);
      console.log(productsList);
   };

   return (
      <ListContext.Provider
         value={{
            showForm,
            productsList,
            displayForm,
            hideForm,
            addProductToList,
         }}
      >
         {children}
      </ListContext.Provider>
   );
}

export default ListContext;
