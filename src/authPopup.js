import React, {Component} from 'react';

class AuthPopup extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            visibility: true
        };

        this.state = this.initialState;
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    } 

    showPopup(props) {
        const popup = document.getElementsByClassName('popup')[0];
        if (!this.state.visibility) {
            popup.classList.add('visible');
            this.setState({
                visibility: true
            });
        }
    }

    closePopup() {
        this.setState({
            visibility: false
        });
        this.props.closeEvent();
    }

    render() {
        if (this.state.visibility) {
            return(
                <div className = 'popup'>
                    <h2 className = "popup__heading">Авторизация</h2>
                    <form className = "popup__form">
                        <div className = "popup-helper">Login</div>
                        <input className = "popup__login" placeholder = "Login"/>
                        <div className = "popup-helper">Password</div>
                        <input className = "popup__password" placeholder = "Password" type = 'password'/>
                        <button onClick = {this.closePopup} className = "popup__auth-button">Вход</button>
                    </form>
                    <a onClick = {this.closePopup} className = "popup-close" href = "#"></a>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}

export default AuthPopup;