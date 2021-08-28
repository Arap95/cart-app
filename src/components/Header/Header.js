import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        const {basket} = this.props
        const newPost = basket.length
        return (
            <div className='navbar'>
                <Link to='/'><img src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png" alt="" /></Link>
                <h1>KFC - Kentucky Fried Chicken</h1>
                <div className='menu'>
                    <Link to="/menu">
                        <p>Menu</p>
                    </Link>
                    <Link to="/basket">
                        <p>Покупка {newPost === 0 ? 0 : newPost}</p>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Header;
