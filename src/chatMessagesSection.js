import React, { Component } from 'react';
import Message from './message.js';

class ChatMessagesSection extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            messages: this.props.messagesArray
        };

        this.state = this.initialState;
    }

    render() {
        return(
            <div className = "messages">
            {
                this.state.messages.map(function(item, index) {
                    return(
                        <Message key = {index} userId = {item.userId} messageInfo = {item}/>
                    );
                })
            }
            </div>
        );
    }
}

export default ChatMessagesSection;