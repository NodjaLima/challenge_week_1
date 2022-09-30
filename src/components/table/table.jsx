import styles from './table.module.css'
import { StudentContext } from '../../context/studentContext'
import { useContext, useState } from 'react'
import delet from '../../images/delete.svg'
import { deleteStudent } from '../../requests/request'
import Modal from 'react-modal';


const Table = () => {
  const { student } = useContext(StudentContext)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [id, setId] = useState()

  const handleDelete = async (id) => {
    await deleteStudent(id)
    .then(
      setModalConfirm(false)
    )
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
                <td className={styles.background}><img className={styles.iconDelet} src={delet} alt="icon delete" onClick={(e) => {
                  setId(item.id_student)
                  setModalConfirm(true)}
                }/></td>
              </tr>
              
            )
          })}
       </tbody>
       
      </table>
      <Modal 
      isOpen={modalConfirm}
      className={styles.modalStyle}>
        <h2>Tem Certeza que deseja deletar esse cadastro permanentemente?</h2>
        <div className={styles.buttonContainer}>
          <button 
          className={styles.buttonModal}
          onClick={async () => {await handleDelete(id)}}>
            Sim
          </button>
          <button 
          className={styles.buttonModal}
          onClick={() => setModalConfirm(false)}>
            Não
          </button>
        </div>
        
      </Modal>
    </div>
   );
}
 
export default Table;

