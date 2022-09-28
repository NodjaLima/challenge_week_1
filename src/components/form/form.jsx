import styles from './form.module.css'

const Form = (props) => {
  return ( 
    <div>
      <form className={styles.formContainer}>
        <section className={styles.inputsForm}>
          <input 
            className={styles.inputForm} 
            type="text" name="name" 
            id="name" 
            placeholder="Nome do Estudante" 
            onChange={props.onBlurName}
            value={props.valueName}
            required
          />
          <input 
            className={styles.inputForm} 
            type="text" 
            name="class" 
            id="class" 
            placeholder="Turma" 
            onChange={props.onBlurClass}
            value={props.valueClass}
            required
            />
          <input 
            className={styles.inputForm} 
            type="number" 
            name="age" 
            id="age" 
            placeholder="Idade" 
            onChange={props.onBlurAge}
            value={props.valueAge}
            required
          />
        </section>        
        <button 
          className={styles.buttonForm} 
          onClick={props.onClick}>
            Enviar
        </button>
      </form>
    </div>
   );
}
 
export default Form;