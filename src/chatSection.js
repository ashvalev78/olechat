import React, {Component} from 'react';
import InputChatForm from './inputChatForm.js';
import ChatMessagesSection from './chatMessagesSection.js';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            // messages array is created to transfer messages from input component to chat section
            messages: [
                {
                    messageId: "0",
                    userId: "0",
                    name: "Oksana",
                    surname: "Robskih",
                    text: "lalalallalaalalalalalalalala",
                    date: new Date()
                },
                {
                    messageId: "1",
                    userId: "0",
                    name: "Oksana",
                    surname: "Robskih",
                    text: "kokokokokokokokokokoko",
                    date: new Date()
                }
            ]
        };

        this.state = this.initialState;
        this.changeState = this.changeState.bind(this);
        this.setNewMessageId = this.setNewMessageId.bind(this);
    }

    // function which adds new message to the messages array in the state property
    changeState(newState) {
        let messageArray = this.state.messages;
        messageArray.push(newState);
        this.setState({
            messages: messageArray
        });
        console.log(this.state.messages);
    }

    // function which generates new id for the next message, based on the previous messages
    setNewMessageId() {
        return (+this.state.messages[this.state.messages.length - 1].messageId + 1).toString();
    }

    render() {
        return(
            <div className = "chat">
                <ChatMessagesSection messagesArray = {this.state.messages}/>
                <InputChatForm functionToAddNewMessage = {this.changeState} newMessageId = {this.setNewMessageId()}/>
            </div>
        );
    }
}

export default Chat;