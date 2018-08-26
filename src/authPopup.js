import React, {Component} from 'react';

class AuthPopup extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            visibility: false
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
        this.state.setState({
            visibility: false
        });
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
                    </form>
                    <a onCilck = {this.closePopup} className = "popup-close" href = "#"></a>
                </div>
            );
        } else {
            console.log('fuck');
            return(
                <div></div>
            );
        }
    }
}

export default AuthPopup;