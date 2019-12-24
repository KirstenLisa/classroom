import React, { Component } from 'react'
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
      </div>
    )
  }
}