import React, {Component} from 'react';
import auth_OutgoingCall from './authAPI.js';
import ContactsList from './contactsList.js';

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

    auth(e) {
        e.preventDefault();
        // console.log(document.querySelector('.popup__login').value);
        auth_OutgoingCall();
        // this.closePopup();
    }

    closePopup() {
        this.setState({
            visibility: false
        });
        this.props.closeEvent();
    }

    render() {
        if (this.state.visibility) {
            if (!this.state.regNeed) {
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
                            <button onClick = {this.auth} className = "popup__auth-button popup__enter-button">Вход</button>
                            <div className = "popup__register hide">
                                <div className = "popup-helper">Вы не зарегистрированы, пожалуйста, введите свои имя, фамилию</div>
                                <input className = "popup__name" placeholder = "Имя" />
                                <input className = "popup__surname" placeholder = "Фамилия" />
                                <div className = "popup__buttons">
                                    <button onClick = {this.auth} className = "popup__auth-button">Зарегистрироваться</button>
                                    <button onClick = {this.auth} className = "popup__auth-button popup__anon-button">Остаться анонимным</button>
                                </div>
                            </div>
                            <div className = "popup-helper">Запомнить:</div>
                            <select className = "auth__limit">
                                <option value = "day">На сутки</option>
                                <option value = "hour">На час</option>
                                <option value = "week">На неделю</option>
                                <option value = "forever">Навсегда</option>
                            </select>
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
                            <div className = "popup-helper">Запомнить:</div>
                            <select className = "auth__limit">
                                <option value = "day">На сутки</option>
                                <option value = "hour">На час</option>
                                <option value = "week">На неделю</option>
                                <option value = "forever">Навсегда</option>
                            </select>
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