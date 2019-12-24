import React from 'react';
import {withRouter} from 'react-router'
import ClassesContext from '../../contexts/ClassesContext'
import ValidationError from '../ValidationError'
import './LoginForm.css'

class LoginForm extends React.Component {

    static contextType = ClassesContext;

    constructor(props) {
      super(props);
      this.state = {
        username: {value: '', touched: false},
        password: {value: '', touched: false},
        class_name: {value: '', touched: false},
        user_type: {value: '', touched: false},
        error: null
      }}

    updateUsername(username) {
      this.setState({username: {value: username, touched: true}})
    }

    updatePassword(password) {
      this.setState({password: {value: password, touched: true}})
    }
    
    updateClassName(class_name) {
          this.setState({class_name: {value: class_name, touched: true}});  
          }

    updateUserType(user_type) {
      this.setState({
        user_type: {value: user_type, touched: true}
      })
    }

    validateUserName() {
      const userName = this.state.username.value.trim();
      console.log(userName)
        if (userName.length === 0) {
          return 'Username is required';
        } else if (userName.length < 3) {
          return 'Username must be at least 3 characters long';
        }
    }

    validatePassword() {
      console.log('password validation')
      const password = this.state.password.value.trim();
        if (password.length === 0) {
          return 'password is required';
        } else if (password.length < 5) {
          return 'Password must be at least 5 characters long';
        }
    }
    
    validateUserSelection() {
      const selectedUserType = this.state.user_type.value;
      console.log('selectedUserType:' + selectedUserType);
      if(selectedUserType === "None" || selectedUserType === '') {
        return 'User Type is required';
      }
  }

  validateClassSelection() {
    const selectedClassName = this.state.class_name.value;
    console.log('selectedClass:' + selectedClassName);
    if(selectedClassName === "None" || selectedClassName === '') {
      return 'Class is required';
    }
}

disableButton() {
  if(this.validateUserName() ||this.validatePassword() || 
  this.validateUserSelection() ||this.validateClassSelection()) {
      return true
  }
}



    handleSubmit = (e) => {
      e.preventDefault();
      const {class_name, user_type} = e.target
      const class_id = class_name.value
      const user = user_type.value
      console.log('submit login form: ' + class_id)
      this.props.history.push(`/welcome/${user}/${class_id}`) 
      
    }

    render() {

    console.log(this.props)
    console.log(this.context.classList)

    const { error } = this.state
    const classList = this
        .context
        .classList
        .map(
            (c, i) => <option value={c.class_id} key={i} id={c.class_id}>{c.class_name}</option>
          );

    const userNameError = this.validateUserName();
    const passwordError = this.validatePassword();
    const userTypeError = this.validateUserSelection();
    const classNameError = this.validateClassSelection();
    const buttonDisabled = this.disableButton();
    

        return (
            <form
              className='loginForm'
              onSubmit={this.handleSubmit}
      >
        <div role='alert'>
        {error && <p>{error.message}</p>}
        </div>
        <div className='username'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            type="text"
            className="login_control"
            name="username"
            id="username"
            onChange={e => this.updateUsername(e.target.value)}
            aria-required="true"
            placeholder="User Name" 
            />
          {this.state.username.touched && 
          (<ValidationError message={userNameError} id="userNameError" />)}
            
        </div>

        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            type="text"
            className="login_control"
            name="password"
            id="password"
            onChange={e => this.updatePassword(e.target.value)}
            aria-required="true" 
            placeholder="Password"
            />
            {this.state.password.touched && 
            (<ValidationError message={passwordError} id="passwordError" />)}
        </div>
        <div className="class-select">
            <label htmlFor="class_name">Select a class: </label>
            <select
                name="class_name"
                id="class_name"
                onChange={e => this.updateClassName(e.target.value)}
                aria-required="true">
                    <option value={"None"}>Select a class...</option>
                    {classList}
                    </select>
                    {this.state.class_name.touched && 
            (<ValidationError message={classNameError} id="userTypeError" />)}
                </div>
        <div className="user-select">
          <label htmlFor="user_name">Log in as: </label>
          <select
            name="user_type"
            id="user_type"
            onChange={e => this.updateUserType(e.target.value)}
            aria-required="true">
            <option value={"None"}>Select a user type...</option>
            <option value="teacher" key={1} id={1}>Teacher</option>
            <option value="parent" key={2} id={2}>Parent</option>
            <option value="student" key={3} id={3}>Student</option>
          </select>
          {this.state.user_type.touched && 
            (<ValidationError message={userTypeError} id="userTypeError" />)}
        </div>

        <div className="login-form-buttons">
          <button 
            type="submit"
            className="login-button"
            disabled={buttonDisabled}>
            Login
          </button>
          <button
            type='button' 
            onClick={() => this.props.history.push('/')}>
            Cancel
          </button>
        </div>

      </form>
    )
  }
}

export default withRouter(LoginForm);