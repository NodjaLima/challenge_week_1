import styles from './table.module.css'
import { StudentContext } from '../../context/studentContext'
import { useContext } from 'react'
import delet from '../../images/delete.svg'
import { deleteStudent } from '../../requests/request'

const Table = () => {

  const { student } = useContext(StudentContext)

  const handleDelete = async (id) => {
    const confirmation = confirm("Deseja excluir o item permanentemente?")
    
    if(confirmation == true) {
      await deleteStudent(id)
    .then(
      alert('Item deletado com sucesso')
    )
    }
    else {
      alert('não foi possível deletar o item')
    }
  }

  return ( 
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.trTitle}>
            <th className={styles.background}>#</th>
            <th className={styles.background}>Nome do Estudante</th>
            <th className={styles.background}>Turma</th>
            <th className={styles.background}>Idade</th>
            <th className={styles.background}></th>
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
                <td className={styles.background}><img className={styles.iconDelet} src={delet} alt="icon delete" onClick={async () => {await handleDelete(item.id_student)}}/></td>
              </tr>
              
            )
          })}
       </tbody>
       
      </table>
    </div>
   );
}
 
export default Table;

