import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import styles from './Messages.module.scss'

const Messages = (props) => {

  const dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  const messagesElements = props.state.messages.map( mes => <MessageItem message={mes.message}/>)

  return (
    <div className={styles.page__messages}>
      <div className={styles.dialogs__inner}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Messages