import React, {Component} from 'react';
import AuthPopup from './authPopup.js';


class Authorization extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            auth: false
        }

        this.state = this.initialState;
        this.exit = this.exit.bind(this);
        this.authCheck = this.authCheck.bind(this);
    }

    authCheck() {
        this.setState({
            auth: true
        })
    }

    exit() {
        this.setState({
            auth: false
        });
    }

    render() {

        if (!this.state.auth) {
            return(
                <a className = "auth no-auth" onClick = {this.authCheck} href = "#">Авторизация</a>
            );
        } else {
            return(
                <div>
                    <AuthPopup />
                    <a className = "auth auth-done" onClick = {this.exit} href = "#">Выход</a>
                </div>
            )
        }
    }
}

export default Authorization;