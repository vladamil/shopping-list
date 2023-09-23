import Header from './components/Header';
import Form from './components/Form';

import { useContext } from 'react';
import ListContext from './context/ListContext';

function App() {
   const { showForm } = useContext(ListContext);

   return (
      <div className="app">
         <Header />
         <div className="main">{showForm && <Form />}</div>
      </div>
   );
}

export default App;
