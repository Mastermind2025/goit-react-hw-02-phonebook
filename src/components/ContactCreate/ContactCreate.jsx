import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactCreate.module.css';

class ContactCreate extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
        // console.log(this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        
        // console.log(this.state);
        // this.props.onSubmit(this.state);
        this.props.onSubmit({id: nanoid(), ...this.state});
        
        this.reset();
    }
    reset = () =>{
        this.setState({ name: '', number: '' });
    }
    render() {
        const { name, number } = this.state;
        return (
            <form className={css.ContactCreate__container} onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        <p className={css.ContactCreate__title}>Name</p>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            className={css.ContactCreate__input}
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        <p className={css.ContactCreate__title}>Phone</p>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            className={css.ContactCreate__input}
                            value={number}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                
                <button className={css.ContactCreate__button} type="submit">
                    Add contacts
                </button>
            </form>
        )
    }
};

export default ContactCreate;

ContactCreate.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}