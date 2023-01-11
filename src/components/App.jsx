import React, { Component } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';


import ContactCreate from './ContactCreate';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './ContactList/Filter';
import Header from './Header';

import contactsJson from './contacts.json';


export class App extends Component {
  state = {
    contacts: contactsJson,
    filter: '',

  }

  addContact = newContact => {
    console.log(newContact);
    this.checkContact(newContact)
      ? Notiflix.Notify.warning(`${newContact.name} is already in your phonebook `)
      : this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts]
        };
      });
    
  
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });

  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }
  availableContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.map(contact =>
        contact.id === contactId
          ? {...contact} : contact )
    }))
  }

  checkContact = newContact => {
    return this.state.contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());
  }

  render() {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <Header title="Phonebook"/>
        <ContactCreate onSubmit={this.addContact} />
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
            onAvailableContacts={this.availableContacts}
          />
        </Section>
      </>
    )
  }
};

App.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })),
}
