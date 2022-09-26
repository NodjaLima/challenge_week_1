import styles from './header.module.css'
import logo from '../../images/logo1.svg'

const Header = () => {
  return ( 
    <div className={styles.headerContainer}>
      <img className={styles.headerLogo} src={logo}></img>      
    </div>
   );
}
 
export default Header;