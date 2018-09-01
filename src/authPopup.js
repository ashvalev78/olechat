import React, {Component} from 'react';
import auth_OutgoingCall from './authAPI.js';

class AuthPopup extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            visibility: true,
            regNeed: false
        };

        this.state = this.initialState;
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.auth = this.auth.bind(this);
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

    auth() {

    }

    closePopup() {
        this.setState({
            visibility: false
        });
        this.props.closeEvent();
    }

    render() {
        if (this.state.visibility) {
            if (this.state.regNeed) {
                return(
                    <div className = 'popup popup__modified'>
                        <h2 className = "popup__heading">Авторизация</h2>
                        <form className = "popup__form">
                            <div className = "popup-helper">Ваш номер</div>
                            <input className = "popup__login" placeholder = "Номер" required/>
                            <div className = "popup-helper">Телефон для звонка</div>
                            <div className = "popup__call-num"></div>
                            <div className = "popup-helper">Статус запроса</div>
                            <div className = "popup__status"></div>
                            <input className = "popup__name" placeholder = "Имя" required />
                            <input className = "popup__surname" placeholder = "Фамилия" required />
                            <button onClick = {auth_OutgoingCall} className = "popup__auth-button">Зарегистрироваться</button>
                        </form>
                        <a onClick = {this.closePopup} className = "popup-close" href = "#"></a>
                    </div>
                );
            } 
            else {
                return(
                    <div className = 'popup'>
                        <h2 className = "popup__heading">Авторизация</h2>
                        <form className = "popup__form">
                            <div className = "popup-helper">Ваш номер</div>
                            <input className = "popup__login" placeholder = "Номер" required/>
                            <div className = "popup-helper">Телефон для звонка</div>
                            <div className = "popup__call-num"></div>
                            <div className = "popup-helper">Статус запроса</div>
                            <div className = "popup__status"></div>
                            <button onClick = {auth_OutgoingCall} className = "popup__auth-button">Вход</button>
                        </form>
                        <a onClick = {this.closePopup} className = "popup-close" href = "#"></a>
                    </div>
                );
            }
        } else {
            return(
                <div></div>
            );
        }
    }
}

export default AuthPopup;