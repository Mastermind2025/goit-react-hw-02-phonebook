import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({value, onChange}) =>{
    return (
        <label>
            <p className={css.Filter__filter}>
                Find contacts by name 
            </p>
            <input
                type="text"
                className={css.Filter__input}
                value={value}
                onChange={onChange}
            />
        </label> 

    );
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
}