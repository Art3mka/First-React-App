import React from 'react'
import styles from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={styles.item}>
                <img className={styles.item__img} src="https://klike.net/uploads/posts/2019-03/1551514006_1.jpg" alt="avatar" />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post