import Header from './components/Header';
import Form from './components/Form';
import { ListProvider } from './context/ListContext';

function App() {
   return (
      <ListProvider>
         <div className="app">
            <Header />
            <div className="main">
               <Form />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  earum exercitationem corrupti maiores placeat dolore,
                  laboriosam sunt asperiores assumenda dolorem cumque explicabo,
                  quae non magnam. Minima exercitationem reprehenderit quasi
                  dicta sint eveniet necessitatibus expedita fugit et
                  voluptatibus, facilis iusto impedit quisquam aliquam illo at.
                  Quo earum cum, repellendus non quaerat esse culpa eius rerum
                  repudiandae debitis nesciunt reiciendis, sapiente minima nihil
                  possimus ipsa sunt adipisci incidunt harum, placeat voluptate
                  officia! Beatae, qui cum excepturi exercitationem ex id illo
                  tempore a labore facere corrupti asperiores iste molestias in
                  assumenda voluptatibus? Minima quidem obcaecati, ea eveniet
                  cupiditate quo perspiciatis earum exercitationem quod illo
                  distinctio enim a sint ex, neque quisquam. Provident animi
                  tenetur numquam accusantium aliquam maiores hic harum
                  similique? Voluptate rem tempora pariatur explicabo minima
                  facilis ea laboriosam adipisci sequi qui? Earum magni
                  accusamus eum possimus. Assumenda, fugiat magnam. Rem optio
                  ipsam quas animi quibusdam aliquid fuga, enim nostrum suscipit
                  eius tempora dolore, eveniet pariatur perferendis laboriosam,
                  nobis neque aperiam placeat molestiae sapiente nisi amet minus
                  accusantium earum! Laboriosam temporibus culpa aliquam nulla,
                  exercitationem autem voluptatibus recusandae provident
                  consequatur, illum cum voluptas veniam nesciunt alias
                  repellendus quidem, praesentium incidunt ratione excepturi
                  delectus totam iusto rerum. Ratione, ab. Quos minus
                  consequuntur facere provident. Minus, consectetur? Earum,
                  quibusdam molestias! Officia dignissimos ut mollitia molestiae
                  enim blanditiis, recusandae veniam aut eaque perferendis
                  laudantium atque! Quisquam est corrupti quos non porro eveniet
                  animi, at mollitia cupiditate, placeat eos eius explicabo
                  voluptatum quasi quidem quo quas similique optio, nam nisi? Id
                  sint, beatae dicta deserunt excepturi quis ullam neque quia
                  voluptas debitis ea nemo temporibus non, omnis nihil sunt
                  aspernatur quaerat. Ex vitae, quaerat quas ratione officiis
                  aliquid atque quae molestias inventore, dolorem recusandae
                  maiores cum iusto minus a eaque odio, sequi tempora ullam
                  tenetur. Omnis voluptas deleniti nobis reprehenderit quas in
                  perferendis iure consectetur qui?
               </p>
            </div>
         </div>
      </ListProvider>
   );
}

export default App;
