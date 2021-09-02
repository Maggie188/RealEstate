import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary vertical pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/mortgagecalculator" className="item">
                Mortgage Calculator
            </Link>
        </div>
    )
};

export default Header;