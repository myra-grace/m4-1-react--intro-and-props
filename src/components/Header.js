import React from "react";
import { users } from '../data';

import "./Header.css";

function Header(props) {
  console.log('HEADER: ', props);

  const usersArr = Object.keys(users);
  return <header>
    {
      usersArr.filter(name => users[name].username !== props.currentUser.username)
      .map(user => {
        return (<div className='user-container'>
          <img className="avatar" src={users[user].avatar}/>
          <p className="username">{users[user].username}</p>
        </div>)
      })
    }
</header>;
}

export default Header;
