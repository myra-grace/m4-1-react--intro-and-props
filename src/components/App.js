import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  console.log('App props: ', props);
  return (
    <div className="wrapper">
      <Header
      messages={props.conversation.messages} 
      currentUser={props.currentUser} />
      <ChatStream 
      messages={props.conversation.messages} 
      currentUser={props.currentUser}/>
      <Footer />
    </div>
  );
}

export default App;
