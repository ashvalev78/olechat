import React, {Component} from 'react';
import AuthPopup from './authPopup.js';


class Authorization extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            auth: false
        }

        this.state = this.initialState;
    }

    render() {

        if (!this.state.auth) {
            return(
                <a className = "auth no-auth" onClick = {console.log(AuthPopup.getState())} href = "#">Авторизация</a>
            );
        } else {
            return(
                <a className = "auth auth-done" href = "#">Выход</a>
            )
        }
    }
}

export default Authorization;