import React, {Component} from 'react';
import AuthPopup from './authPopup.js';
import {API_Request} from './GJAPISDK.js';


class Authorization extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            auth: false
        };

        this.state = this.initialState;
        this.exit = this.exit.bind(this);
        this.authCheck = this.authCheck.bind(this);
    }

    authCheck() {
        this.setState({
            auth: false
        });
    }

    exit() {
        this.setState({
            auth: true
        });
        let r = new API_Request('token.revoke');
        r.submit({}, console.log);
    }

    render() {

        if (this.state.auth) {
            return(
                <a className = "auth no-auth" onClick = {this.authCheck} href = "#">Авторизация</a>
            );
        } else {
            return(
                <div className = "popup__auth-wrapper">
                    <a className = "auth auth-done" onClick = {this.exit} href = "#">Выход</a>
                    <AuthPopup closeEvent = {this.exit}/>
                </div>
            )
        }
    }
}

export default Authorization;