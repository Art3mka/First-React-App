import React from 'react'
import styles from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.posts__wrapper}>
            Мои посты
            <div>
               <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
               <button onClick={ addPost } className={styles.posts__button}>Добавить пост</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts