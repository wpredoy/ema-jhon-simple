import React from 'react';
import image from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={image} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;