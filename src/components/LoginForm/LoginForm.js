import React from 'react';
import {withRouter} from 'react-router'
import ClassesContext from '../../contexts/ClassesContext'
import ValidationError from '../ValidationError'
import TeacherApiService from '../../services/teachers-api-services'
import ClassApiService from '../../services/classes-api-service'
import UsersApiService from '../../services/users-api-service'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

class LoginForm extends React.Component {

    static contextType = ClassesContext;

    constructor(props) {
      super(props);
      this.state = {
        username: {value: '', touched: false},
        password: {value: '', touched: false},
        class_name: {value: 'None', touched: false},
        error: null
      }}

    componentDidMount() {
      this.context.clearError()
      TeacherApiService.getTeachers()
        .then(this.context.setTeacherList)
        .catch(this.context.setError)
      ClassApiService.getClasses()
        .then(this.context.setClassList)
        .catch(this.context.setError)
      }
      

    updateUsername(username) {
      this.setState({username: {value: username, touched: true}})
    }

    updatePassword(password) {
      this.setState({password: {value: password, touched: true}})
    }
    
    updateClassName(class_name) {
          this.setState({class_name: {value: class_name, touched: true}});  
          }


    validateUserName() {
      const userName = this.state.username.value;
        if (userName === undefined) {
          return 'Username is required';
        } else if (userName.length < 3) {
          return 'Username must be at least 3 characters long';
    }
  }

    validatePassword() {
      const password = this.state.password.value;
        if (password === undefined) {
          return 'password is required';
        } else if (password.length < 9) {
          return 'Password must be at least 8 characters long';
        }
    }

  validateClassSelection() {
    const selectedClassName = this.state.class_name.value;
    if(selectedClassName === "None" || selectedClassName === '' || selectedClassName === undefined) {
      return 'Class is required';
    } 
}

validateForm() {
  if (this.validateUserName()) {
    this.setState({username: {touched:true}})
  } else if (this.validatePassword()) {
    this.setState({password: {touched: true}})
  } else if (this.validateClassSelection()) {
    this.setState({class_name: {touched: true}})
}
}

handleSubmitJwtAuth = (e) => {
      e.preventDefault();
      this.setState({ error: null })
     

      const { username, password, class_name } = e.target
      
      const class_id = class_name.value
      const userName = username.value

      if (this.validateForm()) {
        return null 
      
      } else if (this.validatePassword() || this.validateClassSelection() || this.validateUserName()) {
      
        return null
      } else {

      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
        })
          .then(res => {
            username.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.history.push(`/welcome/${class_id}`)
            this.context.setLogin()
            UsersApiService.getUser(userName)
            .then(this.context.setCurrentUser)
            TokenService.saveClass(class_id)
            TokenService.saveUsername(userName)
          })
          .catch(res => {
            this.setState({
              error: {
                 message: res.error
            }
         })
          })
}}
      

    render() {

    const { error } = this.state

    const classList = this
        .context
        .classList
        .map(
            (c, i) => <option value={c.class_id} key={i} id={c.class_id}>{c.class_name}</option>
          );
    const userNameError = this.validateUserName();
    const passwordError = this.validatePassword();
    const classNameError = this.validateClassSelection();

        return (
            <form
              className='loginForm'
              onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert' className="loginError">
        {error && <p>{error.message}</p>}
        </div>
        <div className='username'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            type="text"
            className="login_input"
            name="username"
            id="username"
            onChange={e => this.updateUsername(e.target.value)}
            aria-required="true"
            placeholder="User Name" 
            />
            <div className="login_error">
          {this.state.username.touched && 
          (<ValidationError message={userNameError} id="userNameError" />)}
          </div>
            
        </div>

        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            type="text"
            className="login_input"
            name="password"
            id="password"
            type="password"
            onChange={e => this.updatePassword(e.target.value)}
            aria-required="true" 
            placeholder="Password"
            />
            <div className="login_error">
            {this.state.password.touched && 
            (<ValidationError message={passwordError} id="passwordError" />)}
        </div>
        </div>
        <div className="class-select">
            <label htmlFor="class_name">Select class: </label>
            <select
                name="class_name"
                id="class_name"
                className="login_select"
                onChange={e => this.updateClassName(e.target.value)}
                aria-required="true">
                    <option value={"None"}>Select class...</option>
                    {classList}
                    </select>
                    <div className="login_error">
                    {this.state.class_name.touched && 
            (<ValidationError message={classNameError} id="userTypeError" />)}
                </div>
                </div>

        <div className="login-form-buttons">
          <button 
            type="submit"
            className="loginButton"
            >
            Login
          </button>
          <button
            type='button' 
            className="cancelButton"
            onClick={() => this.props.history.push('/')}>
            Cancel
          </button>
        </div>

      </form>
    )
  }
}

export default withRouter(LoginForm);