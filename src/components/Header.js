import React, {Component} from "react";
import {AppBar,Toolbar,Button} from '@material-ui/core';
import logo from '../assets/images/Logo2.png';

class Header extends Component{

    render() {

        return (

            <AppBar position="fixed">
                <Toolbar className='toolbar'>
                    <div className='logo'>
                        <img src={logo} alt='logo' className='logo-pic'/>
                    </div>
                    <div className='nav-bar '>
                        <a className='item-menu' > Reservation </a>
                        <a className='item-menu' > Orders </a>
                        <Button className='login-button' > Log In </Button>
                        <button className='sign-up-button'> Sign Up </button>
                        <a className='basket' >
                            <i className='fa fa-shopping-basket ' />
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
