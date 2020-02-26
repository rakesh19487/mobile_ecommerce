import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from "../logo.svg"
import { ButtonContainer, NavWrapper } from './Button'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2"> 
                            <i className="fas fa-cart-plus"></i> My Cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


export default Navbar;