import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContext'
import TokenService from '../../services/token-service'
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
              to='/login'>
              Log in
            </Link>
        
        <Link
          to='/register'>
          Register
        </Link>
    
        </div>
      )
    }
  

  render() {
    console.log(this.context.isLoggedIn)
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            My Classroom
          </Link>
        </h1>
        
      {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

    )
  }
}