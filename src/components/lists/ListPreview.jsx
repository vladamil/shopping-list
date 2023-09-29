import styles from './ListPreview.module.css';

function ListPreview({ list }) {
   const total = list.products
      .reduce((acc, prod) => {
         return acc + prod.price;
      }, 0)
      .toFixed(2);

   return (
      <div className={styles.list}>
         <div>
            <h3>{list.title}</h3>
            <p className={styles.date}>Created: 21-11-2023</p>
            <p>total: {total} rsd</p>
         </div>
      </div>
   );
}

export default ListPreview;
