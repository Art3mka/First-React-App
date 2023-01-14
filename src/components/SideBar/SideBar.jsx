import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const setActive = ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link;

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
        <nav className={styles.nav}>
          <div className={styles.item}>
            <NavLink className={setActive} to="/profile">Профиль</NavLink>
          </div>
          <div className={styles.item}>
            <NavLink className={setActive} to="/news">Новости</NavLink>
          </div>
          <div className={styles.item}>
            <NavLink className={setActive} to="/messages">Сообщения</NavLink>
          </div>
          <div className={styles.item}>
            <NavLink className={setActive} to="/music">Музыка</NavLink>
          </div>
          <div className={styles.item}>
            <NavLink className={setActive} to="/options">Настройки</NavLink>
          </div>
        </nav>
    </div>
  )
}

export default SideBar