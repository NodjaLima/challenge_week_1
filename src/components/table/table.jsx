import styles from './table.module.css'
import { StudentContext } from '../../context/studentContext'
import { useContext } from 'react'

const Table = () => {

  const { student } = useContext(StudentContext)

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
          {student.map((item) => {
            return (
              <tr className={styles.trBody}>
                <td className={styles.background}>{item.id_student}</td>
                <td className={styles.background}>{item.name_student}</td>
                <td className={styles.background}>{item.class_student}</td>
                <td className={styles.background}>{item.age_student}</td>
              </tr>
            )
          })}
       </tbody>
       
      </table>
    </div>
   );
}
 
export default Table;
