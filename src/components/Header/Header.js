import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClassesContext from '../../contexts/ClassesContext';
import TokenService from '../../services/token-service';
import {Hyph} from '../../utils/utils';
import './Header.css';
import  School_logo from '../../school_images/school_building.png';

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
    TokenService.clearUser()
    TokenService.clearUsername()
    TokenService.clearClass()
    }
  
    renderLogoutLink() {
      return (
        
        <div className='Header__logged-in'>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
              <button className='logout-button'>
              Logout
              </button>
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

    renderHomeLink() {
      return (
      <h1>
      <Link className='main-link' to='/'>
        <span className='blue'>M</span>
        <span className='red'>y</span>
        <span className='yellow'>C</span>
        <span className='green'>l</span>
        <span className='red'>a</span>
        <span className='blue'>ss</span>
        <span className='yellow'>r</span>
        <span className='green'>oo</span>
        <span className='red'>m</span>
      </Link>
    </h1>
      )}

    renderWelcomeLink(classId) {
      return (
      <h1>
          <Link className='main-link' to={`/welcome/${classId}`}>
            <span className='blue'>M</span>
            <span className='red'>y</span>
            <span className='yellow'>C</span>
            <span className='green'>l</span>
            <span className='red'>a</span>
            <span className='blue'>ss</span>
            <span className='yellow'>r</span>
            <span className='green'>oo</span>
            <span className='red'>m</span>
          </Link>
        </h1>
      )}
  

  render() {
    const classId = sessionStorage.getItem('classId')
    return (
      <nav className='Header'>
        <img className='logo' src={School_logo} alt='school-logo'/>
        {classId
          ? this.renderWelcomeLink(classId)
          : this.renderHomeLink()
        }
       
        
      {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

    )
  }
}