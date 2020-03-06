import React from 'react';
import './ChatMessage.css';

function SentMessage(props) {
    return <div className="current-user-chat-message">
        <img className="avatar"src={props.user.avatar}/>
        <div className="message-container">
            <p className="username">{props.user.username}</p>
            <p className="message">{props.message}</p>
        </div>
    </div>;
}

function ReceivedMessage(props) {
    return <div className="chat-message">
        <img className="avatar"src={props.user.avatar}/>
        <div className="message-container">
            <p className="username">{props.user.username}</p>
            <p className="message">{props.message}</p>
        </div>
    </div>;
}

function ChatMessage(props) {
    console.log('ChatMessage props: ', props);
    if (props.messageType === 'sent') {
        return <SentMessage message={props.body} user={props.user}/>;
    } else {
        return <ReceivedMessage message={props.body} user={props.user}/>;
    }
}
    

export default ChatMessage;