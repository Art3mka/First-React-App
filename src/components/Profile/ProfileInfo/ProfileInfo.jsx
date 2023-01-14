import React from 'react'
import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.profile__cover}>
                <img src="https://gamerwall.pro/src.php?src=https://gamerwall.pro/uploads/posts/2022-03/thumbs/1647907299_1-gamerwall-pro-p-fon-profilya-krasivie-1.jpg&w=400&h=300" alt="cover" />
            </div>
            <div className={styles.profile__info}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo