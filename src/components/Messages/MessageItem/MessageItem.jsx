import React from 'react'
import styles from './MessageItem.module.scss'

const MessageItem = (props) => {
  return (
    <div className={styles.messages__item}>{props.message}</div>
  )
}

export default MessageItem