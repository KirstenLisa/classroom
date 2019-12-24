import React from 'react';
import {withRouter} from 'react-router'
import ClassesContext from '../../contexts/ClassesContext'
import './RegistrationForm.css'

 class RegistrationForm extends React.Component {

  static contextType = ClassesContext;

  state = { error: null }


  render() {

    const classList = this
    .context
    .classList
    .map(
        (c, i) => <option value={c.class_id} key={i} id={c.class_id}>{c.class_name}</option>
      );

    const { error } = this.state
    return (
      <form
        className="registration-form">
        <div role='alert'>
          {}
        </div>

        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name
          </label>
          <input
            type='text'
            className="login_control"
            name='full_name'
            id='full_name'
            aria-required="true"
            placeholder="Full Name">
          </input>
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            type="text"
            className="login_control"
            name="username"
            id="username"
            aria-required="true"
            placeholder="User Name" 
            />
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
            aria-required="true" 
            placeholder="Password"
            />
        </div>
        <div className="class-select">
            <label htmlFor="class">Select a class: </label>
            <select
                name="class"
                aria-required="true">
                    <option value={"None"}>Select a class...</option>
                    {classList}
                    </select>
                </div>
       <div className="registration-form-buttons">
        <button type='submit'>
            Register
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

export default withRouter(RegistrationForm);