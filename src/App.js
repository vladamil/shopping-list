import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/form/Form';
import Lists from './components/lists/Lists';
import SingleList from './components/lists/SingleList';

import ListContext from './context/ListContext';

function App() {
   const { showForm } = useContext(ListContext);
   const content = showForm ? <Form /> : <Lists />;

   return (
      <BrowserRouter>
         <div className="app">
            {!showForm && <Header />}
            <div className="main">
               <Routes>
                  <Route path="/" element={content} />
                  <Route path="/:listId" element={<SingleList />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
