import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            subject: 0
        };

        this.state = this.initialState;
    }

    render() {
        return(
            <div className = "message">

            </div>
        );
    }
}