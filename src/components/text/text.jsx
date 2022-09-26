import styles from './text.module.css'

const Text = () => {
  return ( 
    <div className={styles.textContainer}>
      <p className={styles.title}>
        _dados
      </p>
      <p className={styles.subtitle}>
        Observe abaixo a listagem de Resilientes e estudantes e sua divisão por faixa etária
      </p>
    </div>
    
   );
}
 
export default Text;
