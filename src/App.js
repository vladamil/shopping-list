import Header from './components/Header';
import Form from './components/form/Form';
import Lists from './components/lists/Lists';

import { useContext } from 'react';
import ListContext from './context/ListContext';

function App() {
   const { showForm } = useContext(ListContext);

   return (
      <div className="app">
         <Header />
         <div className="main">
            {showForm && <Form />}
            {!showForm && <Lists />}
         </div>
      </div>
   );
}

export default App;
