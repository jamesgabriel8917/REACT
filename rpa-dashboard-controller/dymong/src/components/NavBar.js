import { NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'

import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {

  const { user } = useAuthValue();


  return (
    <nav className={styles.navbar}>
    <NavLink to='/' className={styles.brand}>
      <h2>Dymon<span>G</span></h2>
    </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        {!user && (
          <>
          <li>
            <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink>
          </li>
          <li>
            <NavLink to='/Register' className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
          </li>
          </>
        )}
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

