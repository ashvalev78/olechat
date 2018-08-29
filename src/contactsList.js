import React, { Component } from 'react';
import Contact from './contact.js';
import ContactPopup from './contactPopup.js';

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

class ContactsList extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            contacts,
            addContact: false
        };
        

        this.state = this.initialState;
        this.addContactClick = this.addContactClick.bind(this);
        this.openContactPopup = this.openContactPopup.bind(this);
        this.closeContactPopup = this.closeContactPopup.bind(this);
        this.parsePopup = this.parsePopup.bind(this);
    }

    addContactClick(e) {
        e.preventDefault();
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

    openContactPopup() {
        this.setState({
            addContact: true
        })
    }

    closeContactPopup() {
        this.setState({
            addContact: false
        })
    }

    parsePopup(newName, newSurname, newId) {
        let length = this.state.contacts.length;
        let updatedContacts = this.state.contacts;
        let newContact = {
            id: newId,
            name: newName,
            surname: newSurname
        };

        updatedContacts.push(newContact);
        this.setState({
            contacts: updatedContacts
        });
    }

    render() {
        if (this.state.addContact) {
            return(
                <div className = "contacts">
                    <h2 className = "contacts__heading">список контактов</h2>
                    {this.state.contacts.map((c, index) => <Contact className = 'contact' name = {c.name} surname = {c.surname} key = {index}/>)}
                    <a onClick = {this.openContactPopup} className = "contact" href="#">
                        <div className = 'contact__wrapper'>
                            <div className = "contact__name">Новый контакт</div>
                        </div>
                    </a>
                    <ContactPopup closePopup = {this.closeContactPopup} parsePopup = {this.parsePopup}/>
                </div>
            );
        }
        return(
            <div className = "contacts">
                <h2 className = "contacts__heading">список контактов</h2>
                {this.state.contacts.map((c, index) => <Contact className = 'contact' name = {c.name} surname = {c.surname} key = {index}/>)}
                <a onClick = {this.openContactPopup} className = "contact" href="#">
                    <div className = 'contact__wrapper'>
                        <div className = "contact__name">Новый контакт</div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ContactsList;