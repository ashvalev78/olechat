import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        let addedClass = "";
        if(this.props.messageInfo.userId !== '1') {
            addedClass = "other_user-msg";
        }
        return addedClass;
    }

    componentDidMount() {
        let elements = document.getElementsByClassName('chat__message');
        let lastMsg = elements[elements.length - 1];

        lastMsg.scrollIntoView();
    }

    render() {
        return(
            <div className = {"chat__message" + " " + this.changeTheme()} >
                <div className = "message__heading">
                    <div className = "message__user-info">
                    <img className = "sender__photo" alt = "" />
                    <div className = "sender__name">
                    {
                        this.props.messageInfo.name + 
                        " " + this.props.messageInfo.surname
                    }
                    </div>
                    </div>
                    <div className = "message__date">{this.props.messageInfo.date.toString()}</div>
                </div>
                <div className = "message__body">
                    <p className = "message__text">{this.props.messageInfo.text}</p>
                </div>
            </div>
        );
    }
}

export default Message;