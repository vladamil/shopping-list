import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {
   const [showForm, setShowForm] = useState(false);
   const [productsList, setProductsList] = useState([]);
   const [lists, setLists] = useState(
      JSON.parse(localStorage.getItem('lists')) || []
   );
   const [listToEdit, setListToEdit] = useState(null);
   const [validationMsg, setValidationMsg] = useState('');

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

   const fillProductsFromList = (list) => {
      setProductsList(list.products);
   };

   const addList = (title) => {
      setLists([
         ...lists,
         {
            id: uuidv4(),
            date: dateCreator(),
            title,
            products: productsList,
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

   const selectListToEdit = (id) => {
      setListToEdit(lists.find((list) => list.id === id));
   };

   const clearListToEdit = () => {
      setListToEdit(null);
   };

   const editList = (list, title) => {
      let changedList = lists.find((item) => item.id === list.id);

      changedList = { ...changedList, products: productsList, title };

      setLists(
         lists.map((item) => {
            if (item.id === list.id) {
               return changedList;
            } else {
               return item;
            }
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

   const createValidationMsg = (message) => {
      setValidationMsg(message);
   };

   return (
      <ListContext.Provider
         value={{
            showForm,
            productsList,
            lists,
            listToEdit,
            validationMsg,
            displayForm,
            hideForm,
            addProductToList,
            deleteProductFromList,
            clearProducts,
            fillProductsFromList,
            addList,
            deleteList,
            selectListToEdit,
            editList,
            clearListToEdit,
            toggleIsCheckedProduct,
            createValidationMsg,
         }}
      >
         {children}
      </ListContext.Provider>
   );
}

export default ListContext;
