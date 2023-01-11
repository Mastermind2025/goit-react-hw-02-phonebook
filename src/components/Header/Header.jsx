import React from "react";
import PropTypes from 'prop-types';
import css from './Header.module.css';

const Header = ({title}) => (
    <div className={css.Header__container}>
        <p className={css.Header__title}>{title}</p>
        
    </div>
)

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    
}