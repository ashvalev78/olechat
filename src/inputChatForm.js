import React, { Component } from 'react';

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
            let newMsg = {
                messageId: this.props.newMessageId,
                userId: "1",
                name: "Unauthorized",
                surname: "User",
                text: messageText,
                date: new Date()
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
                    <img className = "share__button-img" alt = ""/>
                </a>
                <a className = "submit__button" onClick = {this.createNewMessage} href = "#">
                    <img className = "submit__button-img" alt = ""/>
                </a>
            </div>
        );
    }
}

export default InputChatForm;