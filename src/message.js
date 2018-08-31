import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);

        this.changeTheme = this.changeTheme.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    playSound() {

        let audio = document.getElementById('sound');
        let hidden = "hidden";

        // Standards:
        if (hidden in document)
            document.addEventListener("visibilitychange", onchange);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onchange);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onchange);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onchange);
        // IE 9 and lower:
        else if ("onfocusin" in document)
            document.onfocusin = document.onfocusout = onchange;
        // All others:
        else
            window.onpageshow = window.onpagehide
            = window.onfocus = window.onblur = onchange;

        function onchange (evt) {
            var v = "visible", h = "hidden",
                evtMap = {
                    blur:h, focusout:h, pagehide:h
                };

            evt = evt || window.event;
            if (evt.type in evtMap)
                audio.play();
        }
            
        if( document[hidden] !== undefined )
            onchange({type: document[hidden] ? "blur" : "focus"});
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
        this.playSound();
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