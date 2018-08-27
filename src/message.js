import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            isAnotherUser: false
        };
    }

    render() {
        return(
            <div className = "chat__message" >
                <div className = "message__heading">
                    <img className = "sender__photo" alt = "" />
                    <div className = "sender__name">
                    {
                        this.props.messageInfo.name + 
                        " " + this.props.messageInfo.surname
                    }
                    </div>
                </div>
                <div className = "message__body">
                    <p className = "message__text">{this.props.messageInfo.text}</p>
                </div>
                <div className = "message__date">{this.props.messageInfo.date.toString()}</div>
            </div>
        );
    }
}

export default Message;