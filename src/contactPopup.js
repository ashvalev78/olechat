import React, { Component } from 'react';

class ContactPopup extends Component {

    constructor(props) {
        super(props);
        this.getValues = this.getValues.bind(this);
    } 

    getValues() {
        let nameInput = document.getElementsByClassName('new__contact-name')[0];
        let surnameInput = document.getElementsByClassName('new__contact-surname')[0];
        let userIdInput = document.getElementsByClassName('new__contact-userId')[0];


    }

    render() {
        return(
            <div className = "contact__popup">
                <h2 className = "contact__popup-heading">Создание контакта</h2>
                <form className = "contact__form">
                    <div className = "new__contact-help">Имя</div>
                    <input className = "new__contact-name" />
                    <div className = "new__contact-help">Фамилия</div>
                    <input className = "new__contact-surname" />
                    <div className = "new__contact-help">User Id</div>
                    <input className = "new__contact-userId" />
                    <button className = "add__contact-button" onClick = {this.getValues}>Добавить контакт</button>
                </form>
                <a className = "popup-close" href = "#" onClick = {this.props.closePopup}></a>
            </div>
        );
    }
}

export default ContactPopup;
