import styles from './table.module.css'

const Table = (props) => {
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
          <tr>
            <td className={styles.background}>{props.id}</td>
            <td className={styles.background}>{props.name}</td>
            <td className={styles.background}>{props.class}</td>
            <td className={styles.background}>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
   );
}
 
export default Table;
