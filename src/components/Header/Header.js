import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            My Classroom
          </Link>
        </h1>
        <div className='Header__not-logged-in'>
          <div className='login-link'>
            <Link
              to='/login'>
              Log in
            </Link>
          </div>
        
        <Link
          to='/register'>
          Register
        </Link>
      </div>
      </nav>

    </>
  }
}