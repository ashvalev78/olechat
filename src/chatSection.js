import React, {Component} from 'react';
import InputChatForm from './inputChatForm.js';
import ChatMessagesSection from './chatMessagesSection.js';
import Search from './search.js';

class Chat extends Component {
    constructor(props) {
        super(props);

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
        
        this.initialState = {
            // messages array is created to transfer messages from input component to chat section
            messages: [
                {
                    messageId: "0",
                    userId: "0",
                    name: "Наемная",
                    surname: "уборщица",
                    text: "lalalallalaalalalalalalalalalalalallalaalalalalalalalalalalalallalaalalalalalalalalalalalallalaalalalalalalalalalalalallalaalalalalalalalalalalalallalaalalalalalalalala",
                    date: dd + '/' + mm + '  ' + th + ':' + tm + ':' + ts
                },
                {
                    messageId: "1",
                    userId: "0",
                    name: "Наемная",
                    surname: "уборщица",
                    text: "kokokokokokokokokokoko",
                    date: dd + '/' + mm + '.' + '  ' + th + ':' + tm + ':' + ts
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
        // console.log(this.state.messages);
    }

    // function which generates new id for the next message, based on the previous messages
    setNewMessageId() {
        return (+this.state.messages[this.state.messages.length - 1].messageId + 1).toString();
    }

    render() {
        return(
            <div className = "chat">
                <Search />
                <ChatMessagesSection messagesArray = {this.state.messages}/>
                <InputChatForm functionToAddNewMessage = {this.changeState} newMessageId = {this.setNewMessageId()}/>
            </div>
        );
    }
}

export default Chat;