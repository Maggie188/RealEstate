import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <a href="https://www.google.com/maps" className="item">
                Maps
            </a>
            <div className="right menu">
                <Link to="/homes/new" className="ui button">
                    <i className="plus icon"></i>
                    Add a home
                </Link>
            </div>
        </div>
    )
};

export default Header;