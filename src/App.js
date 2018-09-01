import React, { Component } from 'react';
import ContactsList from './contactsList.js';
import GroupList from './groupsList.js';
import Chat from './chatSection.js';
import Authorization from './auth.js';
import AuthPopup from './authPopup.js';
import {getCookie, setCookie, deleteCookie} from './cookies.js';
import './App.css';

// function addUserName() {
//   if(getCookie('last_name') != undefined)
//     return (getCookie('last_name') + getCookie('first_name'));
//   else return 
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className = "header">
            <Authorization />
            <div className = "user__contact">
              <img className = "contact__avatar" alt = ""/>
              <div className = "contact__name user__name">{ }</div>
            </div>
            <h1 className = "chatname">urf booking system</h1>
            <a className = "frigate" href = "#"></a>
            <a className = "site__back" href = "#">
              <div className = "site__back-title">На сайт</div>
              <div className = "site__back-icon"></div>
            </a>
          </div>
          <div className = "main__section">
            <ContactsList />
            <Chat />
            <div className = "threads">
              <GroupList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
