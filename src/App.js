import Header from './components/Header';
import Form from './components/Form';

import { useContext } from 'react';
import ListContext from './context/ListContext';

function App() {
   const { showForm } = useContext(ListContext);

   return (
      <div className="app">
         <Header />
         <div className="main">
            {showForm && <Form />}
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
               harum minima molestiae adipisci pariatur eaque molestias ab. Hic
               voluptatem dolore nemo libero. Nemo dolor fugiat quidem aperiam
               dignissimos facere architecto reprehenderit impedit expedita
               sapiente magnam animi, recusandae, fuga earum, eligendi ipsam ad
               voluptatum perspiciatis ab velit dolore mollitia tenetur labore?
               Reprehenderit beatae quod sed ratione tenetur cum porro
               architecto aspernatur recusandae aliquam praesentium nisi error
               inventore, nam eveniet adipisci at minus enim rerum alias fuga
               rem. Debitis dolores odio rem culpa vero eos officia dolorem
               commodi eaque quibusdam inventore corporis, harum praesentium
               maxime aspernatur vel earum? Aperiam pariatur cumque neque harum
               asperiores dolore consequatur cum totam tempora provident quam
               fugiat alias fugit ex, optio omnis nostrum sunt quisquam autem,
               veniam tempore illum quibusdam. Cum deleniti architecto modi
               voluptatem voluptatibus hic eum maxime culpa doloribus
               praesentium. Et rem obcaecati mollitia voluptatibus? Nulla
               expedita odit dolorum voluptates, animi, cupiditate porro aperiam
               est labore, sapiente ab qui iure ducimus reiciendis distinctio a
               natus sunt. Nemo, eaque voluptas adipisci inventore, provident
               repudiandae nihil quod ut dicta, beatae commodi eum dolorem
               reiciendis sapiente magnam exercitationem voluptatem nulla.
               Nesciunt, recusandae. Omnis enim, sint sapiente minima a hic non
               debitis, quidem voluptatem quam, voluptatibus quaerat vitae.
               Impedit nulla aliquam, qui non unde repudiandae fugiat cupiditate
               facere quia reiciendis voluptate adipisci atque natus quasi amet
               deleniti iure debitis ullam, architecto modi dolorum, vel quis
               deserunt pariatur? Ea nobis rerum accusantium vel perspiciatis
               enim eligendi laborum ex praesentium unde, voluptatibus quibusdam
               soluta consequatur cupiditate dolore ut reiciendis nemo
               consectetur facilis eveniet excepturi id quidem non? Dignissimos
               voluptates modi quod iste numquam odio dolorum placeat deserunt
               deleniti quaerat, animi at? Assumenda suscipit fugit praesentium,
               ratione amet distinctio ipsa impedit molestias aperiam, eveniet
               facilis porro non odit repellendus debitis incidunt explicabo?
               Ducimus libero ex facere voluptate sunt atque laudantium iusto
               laboriosam.
            </p>
         </div>
      </div>
   );
}

export default App;
