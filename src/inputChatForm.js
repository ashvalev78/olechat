import React, { Component } from 'react';

class InputChatForm extends Component {
    render() {
        return(
            <div className = "form">
                <textarea className = "chat__input" />
                <a className = "share__button" href = "#">
                    <img className = "share__button-img" />
                </a>
                <a className = "submit__button" href = "#">
                    <img className = "submit__button-img" />
                </a>
            </div>
        );
    }
}

export default InputChatForm;