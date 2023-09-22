import { useContext } from 'react';
import ListContext from '../context/ListContext';

function Header() {
   const { displayForm } = useContext(ListContext);

   return (
      <header className="header">
         <div>LOGO</div>

         <h1>Shopping List</h1>
         <div>
            <button onClick={displayForm}>ADD</button>
         </div>
      </header>
   );
}

export default Header;
