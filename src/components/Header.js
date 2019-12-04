import React, {Component} from "react";
import {Button} from '@material-ui/core';
import {logo} from '../assets/images/logo.png'

class Header extends Component{

    render() {
        return (
            <div>
              <header>
                <div className='header-in'>
                  <div className='logo'>
                    <img src='../assets/images/logo.png' alt='logo'/>
                  </div>
                  <div className='top-menu '>
                    <a className='menu-item'> Reservation </a>
                    <a className='menu-item'> Orders </a>
                    <Button className='btn-login'> Log In </Button>
                    <Button className='btn-sign-up'> Sign Up </Button>
                    <a className='basket'>
                      <i className='fa fa-shopping-basket ' />
                    </a>
                  </div>
                </div>
              </header>
            </div>
        );
    }
}

export default Header;
