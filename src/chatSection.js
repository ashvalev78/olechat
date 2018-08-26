import React, {Component} from 'react';
import InputChatForm from './inputChatForm.js';
import ChatMessagesSection from './chatMessagesSection.js';

class Chat extends Component {
    render() {
        return(
            <div className = "chat">
                <ChatMessagesSection />
                <InputChatForm />
            </div>
        );
    }
}

export default Chat;