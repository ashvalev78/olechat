import React, { Component } from 'react';
import ContactsList from './contactsList.js';
import GroupList from './groupsList.js';
import Chat from './chatSection.js';
import Authorization from './auth.js';
import AuthPopup from './authPopup.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className = "header">
            <Authorization />
            <h1 className = "chatname">yumichat</h1>
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
