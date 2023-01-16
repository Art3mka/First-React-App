import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

  return (
    <div className={styles.page__profile}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile