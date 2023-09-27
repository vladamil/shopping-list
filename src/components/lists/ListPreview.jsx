import styles from './ListPreview.module.css';

function ListPreview({ list }) {
   return (
      <div className={styles.list}>
         <h3>{list.title}</h3>
         <p>Date Created: 21-11-2023</p>
         <p>total: 300 rsd</p>
      </div>
   );
}

export default ListPreview;
