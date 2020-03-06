import React from 'react';
import ChatMessage from './ChatMessage'
import './ChatStream.css';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {  
  console.log('ChatStream props: ', props);
  return (
  <section className="chat-stream">
    {props.messages.map(message => {
      let messageType = (message.user === props.currentUser) ? 'sent' : 'received';

      return (
        <ChatMessage 
        user={message.user}
        body={message.body}
        messageType={messageType}
        />
      );
    })}
  </section>
);
}

export default ChatStream;
