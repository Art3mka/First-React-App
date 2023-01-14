import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogItem.module.scss'

const setActive = ({ isActive }) => isActive ? `${styles.active}` : "";

const DialogItem = (props) => {
    const path = "/messages/" + props.id;
    const name = props.name;

    return (
        <div className={styles.dialog__item}>
            <NavLink className={setActive} to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem