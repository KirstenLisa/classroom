import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

render() {
    return (
      <div className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
        />
        <p>You don't have an account yet? Sign up here:</p>
        <Link
          className='register-link'
          to='/register'>
             <span className='blue'>R</span>
            <span className='red'>e</span>
            <span className='green'>g</span>
            <span className='yellow'>i</span>
            <span className='red'>s</span>
            <span className='blue'>t</span>
            <span className='yellow'>e</span>
            <span className='blue'>r</span>
        </Link>
      </div>
    )
  }
}