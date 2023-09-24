import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {
   const [showForm, setShowForm] = useState(false);
   const [productsList, setProductsList] = useState([]);
   const [lists, setLists] = useState([]);

   const displayForm = () => {
      setShowForm(true);
   };

   const hideForm = () => {
      setShowForm(false);
   };

   const addProductToList = (item, price, isChem) => {
      setProductsList([
         ...productsList,
         { id: uuidv4(), item, price: Number(price), isChem },
      ]);
      console.log(productsList);
   };

   const deleteProductFromList = (id) => {
      setProductsList(productsList.filter((prod) => prod.id !== id));
   };

   const clearProducts = () => {
      setProductsList([]);
   };

   const addList = (title, products) => {
      setLists([...lists, { id: uuidv4(), title, products }]);
   };

   return (
      <ListContext.Provider
         value={{
            showForm,
            productsList,
            displayForm,
            hideForm,
            addProductToList,
            deleteProductFromList,
            clearProducts,
            addList,
         }}
      >
         {children}
      </ListContext.Provider>
   );
}

export default ListContext;
