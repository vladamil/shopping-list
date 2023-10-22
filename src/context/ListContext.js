import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {
   const [showForm, setShowForm] = useState(false);
   const [productsList, setProductsList] = useState([]);
   const [lists, setLists] = useState(
      JSON.parse(localStorage.getItem('lists')) || []
   );

   useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(lists));
   }, [lists]);

   // helper function to add date to list creation
   const dateCreator = () => {
      const date = new Date();
      return new Intl.DateTimeFormat('en-GB').format(date);
   };

   const displayForm = () => {
      setShowForm(true);
   };

   const hideForm = () => {
      setShowForm(false);
   };

   const addProductToList = (item, price) => {
      setProductsList([
         ...productsList,
         { id: uuidv4(), item, price: Number(price), isChecked: false },
      ]);
   };

   const deleteProductFromList = (id) => {
      setProductsList(productsList.filter((prod) => prod.id !== id));
   };

   const clearProducts = () => {
      setProductsList([]);
   };

   const addList = (title, products) => {
      setLists([
         ...lists,
         {
            id: uuidv4(),
            date: dateCreator(),
            title,
            products,
         },
      ]);
   };

   const deleteList = (id) => {
      setLists(
         lists.filter((list) => {
            return list.id !== id;
         })
      );
   };

   const toggleIsCheckedProduct = (listId, prodId) => {
      // find list we are in
      let newList = lists.find((list) => list.id === listId);

      // toggle the checked product from the list
      const updatedProd = newList.products.map((prod) => {
         if (prod.id === prodId) {
            return { ...prod, isChecked: !prod.isChecked };
         } else {
            return prod;
         }
      });

      // update list we are in
      newList = { ...newList, products: updatedProd };

      // set updated list to our state
      setLists(
         lists.map((list) => {
            if (list.id === listId) {
               return newList;
            } else {
               return list;
            }
         })
      );
   };

   return (
      <ListContext.Provider
         value={{
            showForm,
            productsList,
            lists,
            displayForm,
            hideForm,
            addProductToList,
            deleteProductFromList,
            clearProducts,
            addList,
            deleteList,
            toggleIsCheckedProduct,
         }}
      >
         {children}
      </ListContext.Provider>
   );
}

export default ListContext;
