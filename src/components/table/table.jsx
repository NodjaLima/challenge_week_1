import styles from './table.module.css'
import Data from '../../../data/data.js';

const Table = () => {

  return ( 
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.trTitle}>
            <th className={styles.background}>#</th>
            <th className={styles.background}>Nome do Estudante</th>
            <th className={styles.background}>Turma</th>
            <th className={styles.background}>Idade</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => {
            return (
              <tr className={styles.trBody}>
                <td className={styles.background}>{item.id}</td>
                <td className={styles.background}>{item.name}</td>
                <td className={styles.background}>{item.class}</td>
                <td className={styles.background}>{item.age}</td>
              </tr>
            )
          })}
       </tbody>
       
      </table>
    </div>
   );
}
 
export default Table;
