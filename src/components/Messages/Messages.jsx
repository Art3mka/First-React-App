import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import styles from './Messages.module.scss'

const Messages = (props) => {

  const newMessageElement = React.createRef();

  const dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  const messagesElements = props.state.messages.map( mes => <MessageItem message={mes.message}/>)

  const addMessage = () => {
    let text = newMessageElement.current.value;
    if (text) {
      alert(`${text}`)
    }
    else {
      text = `no text`;
      alert(`${text}`);
    }
  }

  return (
    <div className={styles.page__messages}>
      <div className={styles.dialogs__inner}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div className="input">
        <textarea ref={newMessageElement}></textarea>
        <button onClick={ addMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default Messages