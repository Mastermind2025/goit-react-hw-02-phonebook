import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, onAvailableContacts }) => (
    <ul className={css.ContactList__list}>
        {contacts.map(({ id, name, number }) => (
            
            <li key={id}
                className={css.ContactList__item}>
                <p className={css.ContactList__name}>{name.split(" ").map((word) => { 
                    return word[0].toUpperCase() + word.substring(1); 
                    }).join(" ")}
                </p>
                <p className={css.ContactList__phone}>{number}</p>
                <button
                    type="button"
                    className={css.ContactList__button}
                    onClick={() => onDeleteContact(id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
)

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
}