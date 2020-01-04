import React from 'react';
import {withRouter} from 'react-router'
import ClassesContext from '../../contexts/ClassesContext'
import TeacherApiService from '../../services/teachers-api-services'
import ClassApiService from '../../services/classes-api-service'
import './RegistrationForm.css'

 class RegistrationForm extends React.Component {

  static contextType = ClassesContext;

  state = { error: null }

  componentDidMount() {
    this.context.clearError()
    TeacherApiService.getTeachers()
      .then(this.context.setTeacherList)
      .catch(this.context.setError)
    ClassApiService.getClasses()
      .then(this.context.setClassList)
      .catch(this.context.setError)
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { fullname, username, password, class_id, user_type } = e.target
      const full_name = fullname.value
      username.value = ''
      password.value = ''
      class_id.value = ''
      user_type.value = ''

    console.log('registration form submitted')
    console.log({ full_name, username, password, class_id, user_type })

    fullname.value = ''
    username.value = ''
    password.value = ''
    class_id.value = ''
    user_type.value = ''
    //this.props.history.push('/login') 
  }
     
  
     

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
        className="registration-form"
        onSubmit={this.handleSubmit}>
        <div role='alert'>
          {}
        </div>

        <div className='fullname'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name
          </label>
          <input
            type='text'
            className="login_control"
            name='fullname'
            id='fullname'
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
            <label htmlFor="class_id">Select a class: </label>
            <select
                name="class_id"
                aria-required="true">
                    <option value={"None"}>Select a class...</option>
                    {classList}
                    </select>
                </div>
                <div className="user-select">
          <label htmlFor="user_name"> Register as: </label>
          <select
            name="user_type"
            id="user_type"
            aria-required="true">
            <option value={"None"}>Role: </option>
            <option value="teacher" key={1} id={1}>Teacher</option>
            <option value="parent" key={2} id={2}>Parent</option>
            <option value="student" key={3} id={3}>Student</option>
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