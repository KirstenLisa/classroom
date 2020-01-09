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
          to='/register'>
          Register
        </Link>
      </div>
    )
  }
}