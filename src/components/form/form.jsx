import styles from './form.module.css'

const Form = (props) => {
  return ( 
    <div>
      <form className={styles.formContainer}>
        <section className={styles.inputsForm}>
          <input className={styles.inputForm} type="text" name="name" id="name" placeholder="Nome do Estudante"/>
          <input className={styles.inputForm} type="text" name="class" id="class" placeholder="Turma"/>
          <input className={styles.inputForm} type="number" name="age" id="age" placeholder="Idade"/>
        </section>        
        <button className={styles.buttonForm} onClick={props.onClick}>Enviar</button>
      </form>
    </div>
   );
}
 
export default Form;