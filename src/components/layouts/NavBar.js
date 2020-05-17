import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../logo.svg'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm nav px-sm-5 nav">
                {/* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                */}
                <Link to="/"  rel="noopener noreferrer">
                <img src={logo} alt ="store" className= "navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link className="nav__link" to="/" rel="noopener noreferrer"> Product</Link>
                    </li>
                </ul>

                <Link to="/cart" rel="noopener noreferrer" className="ml-auto">
                    <button className="nav__btn">
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </button>
                </Link>
                    
            </nav>
        )
    }
}
