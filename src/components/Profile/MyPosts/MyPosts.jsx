import React from 'react'
import styles from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

    const postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.posts__wrapper}>
            Мои посты
            <div>
               <textarea name="" id="" cols="30" rows="10"></textarea>
               <button className={styles.posts__button}>Добавить пост</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts