import { createContext, useState } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {
   const [showForm, setShowForm] = useState(false);

   return (
      <ListContext.Provider value={showForm}>{children}</ListContext.Provider>
   );
}

export default ListContext;
