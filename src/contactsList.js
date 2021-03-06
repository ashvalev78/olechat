import React, { Component } from 'react';
import Contact from './contact.js';
import ContactPopup from './contactPopup.js';

var contacts = [
    {
        id: 0,
        name: '',
        surname: 'уборщица',
        phone: "+17239816326"
    },
    {
        id: 1,
        name: 'Fedya',
        surname: 'Pupkin',
        phone: '+7987654321'
    },
    {
        id: 2,
        name: 'Robin',
        surname: 'Bobin',
        phone: '+735263513'
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
        });
    }

    closeContactPopup() {
        this.setState({
            addContact: false
        });
    }

    parsePopup(newName, newSurname, phone) {
        let length = this.state.contacts.length;
        let updatedContacts = this.state.contacts;
        let newContact = {
            phone: phone,
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
                    <div className = "contacts__section">
                        {this.state.contacts.map((c, index) => <Contact className = 'contact' name = {c.name} surname = {c.surname} phone = {c.phone} key = {index}/>)}
                        <a onClick = {this.openContactPopup} className = "contact" href="#">
                            <div className = 'contact__wrapper'>
                                <div className = "contact__name">Новый контакт</div>
                            </div>
                        </a>
                    </div>
                    <ContactPopup closePopup = {this.closeContactPopup} parsePopup = {this.parsePopup}/>
                </div>
            );
        }
        return(
            <div className = "contacts">
                <h2 className = "contacts__heading">список контактов</h2>
                <div className = "contacts__section">
                    {this.state.contacts.map((c, index) => <Contact className = 'contact' name = {c.name} surname = {c.surname} phone = {c.phone} key = {index}/>)}
                    <a onClick = {this.openContactPopup} className = "contact" href="#">
                        <div className = 'contact__wrapper'>
                            <div className = "contact__name">Новый контакт</div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default ContactsList;