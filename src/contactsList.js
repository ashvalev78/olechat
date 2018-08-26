import React, { Component } from 'react';
import Contact from './contact.js';

var contacts = [
    {
        id: 0,
        name: 'Oksana',
        surname: 'Robskih'
    },
    {
        id: 1,
        name: 'Fedya',
        surname: 'Pupkin'
    },
    {
        id: 2,
        name: 'Robin',
        surname: 'Bobin'
    }
];

// function that takes our contacts from array and creates a list of react-components
function GetContacts(props) {
    return(
        <div>
            {props.contacts.map(c => <Contact className = 'contact' name = {c.name} surname = {c.surname} key = {c.id}/>)}
        </div>
    );
}

class ContactsList extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            contacts
        };
        

        this.state = this.initialState;
        this.addContact = this.addContact.bind(this);
        this.addContactClick = this.addContactClick.bind(this);
    }

    addContact() {
        let length = this.state.contacts.length;
        let newContact = {
            id: length,
            name: "New",
            surname: "Contact"
        };
    }

    addContactClick(e) {
        e.preventDefault();
        this.addContact();
        let length = this.state.contacts.length;
        let updatedContacts = this.state.contacts;
        let newContact = {
            id: length,
            name: "New",
            surname: "Contact"
        };

        updatedContacts.push(newContact);
        this.setState({
            contacts: updatedContacts
        });
    }

    render() {
        return(
            <div className = "contacts">
                <h2 onClick={this.update} className = "contacts__heading">список контактов</h2>
                <GetContacts contacts = {this.state.contacts}/>
                <a onClick = {this.addContactClick} className = "contact" href="#">
                    <div className = 'contact__wrapper'>
                        <div className = "contact__name">Новый контакт</div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ContactsList;