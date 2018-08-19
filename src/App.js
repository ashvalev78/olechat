import React, { Component } from 'react';
import ContactsList from './contactsList.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className = "header">
            <h1 className = "chatname">olechat</h1>
          </div>
          <div className = "main__section">
            {
            }
              <ContactsList />
            <div className = "chat">
            </div>
            <div className = "threads">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
