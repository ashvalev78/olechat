
import React, { Component } from 'react';
import Contact from './contact.js';

var Contacts = [
    {
        name: 'Petya',
        surname: 'Petuhov'
    },
    {
        name: 'Fedor',
        surname: 'Dobrolubov'
    },
    {
        name: 'Oksana',
        surname: 'Robskih'
    }
];

function getContacts() {
    return Contacts.map(function(item) {
        return(
            <Contact className = 'contact' name = {item.name} surname = {item.surname}/>
        );
    });
}

class ContactsList extends Component {
    render() {
        return (
            <div className = "contacts">
                {getContacts()}
                <Contact className = "contact" name = "Новый Контакт"/>
            </div>
        );
    }
}

export default ContactsList;