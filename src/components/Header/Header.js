import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContext'
import TokenService from '../../services/token-service'
import {Hyph, Button} from '../../utils/utils'
import './Header.css'

export default class Header extends Component {

  static contextType = ClassesContext;


  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }


  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.setLogin()
    }
  
    renderLogoutLink() {
      return (
        <div className='Header__logged-in'>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
        </div>
      )
    }
  
    renderLoginLink() {
      return (
        <div className='Header__not-logged-in'>
          
            <Link
              className='login-link'
              to='/login'>
              Log in
            </Link>

            <Hyph/>
        
        <Link
          className='registration-link'
          to='/register'>
          Register
        </Link>
    
        </div>
      )
    }
  

  render() {
    //console.log(this.context.isLoggedIn)
    return (
      <nav className='Header'>
        <h1>
          <Link className='main-link' to='/'>
            <span className='blue'>M</span>
            <span className='red'>y</span>
            <span className='yellow'>C</span>
            <span className='green'>l</span>
            <span className='red'>a</span>
            <span className='blue'>ss</span>
            <span className='yellow'>r</span>
            <span className='blue'>oo</span>
            <span className='red'>m</span>
          </Link>
        </h1>
        
      {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

    )
  }
}