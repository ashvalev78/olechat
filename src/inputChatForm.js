import React, { Component } from 'react';
import {getCookie, setCookie, deleteCookie} from './cookies.js';


class InputChatForm extends Component {
    constructor(props) {
        super(props);
        this.createNewMessage = this.createNewMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    createNewMessage() {
        let messageInput = document.getElementsByClassName('chat__input')[0];
        let messageText = messageInput.value;
        messageInput.value = "";
        if (messageText !== "") {
            let mdate = new Date();
            let dd = mdate.getDate();
            if (dd < 10) dd = '0' + dd;
            let mm = mdate.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            let yy = mdate.getFullYear();
            let th = mdate.getHours();
            if (th < 10) th = '0' + th;
            let tm = mdate.getMinutes();
            if (tm < 10) tm = '0' + tm;
            let ts = mdate.getSeconds();
            if (ts < 10) ts = '0' + ts;
            let lastname, firstname;
            if (getCookie('last_name'))
                lastname = getCookie('last_name');
            else lastname = 'Anauthorized';
            if (getCookie('first_name'))
                firstname = getCookie('first_name');
            else firstname = 'User';
            let newMsg = {
                messageId: this.props.newMessageId,
                userId: "1",
                name: lastname,
                surname: firstname,
                text: messageText,
                date: dd + '/' + mm + '  ' + th + ':' + tm + ':' + ts
            };
            this.props.functionToAddNewMessage(newMsg);
        }
    }

    handleKeyPress(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            this.createNewMessage();
        }
    }

    render() {
        return(
            <div className = "form">
                <textarea className = "chat__input" onKeyPress = {this.handleKeyPress}/>
                <a className = "share__button" href = "#">
                </a>
                <a className = "submit__button" onClick = {this.createNewMessage} href = "#">
                </a>
            </div>
        );
    }
}

export default InputChatForm;