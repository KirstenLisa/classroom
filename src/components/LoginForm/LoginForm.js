import React from 'react';
import ClassesContext from '../../contexts/ClassesContexts'
import './LoginForm.css'

class LoginForm extends React.Component {

    static contextType = ClassesContext;

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        class_name: '',
        user_type: ''
        }}
    
    updateClassName(class_name) {
          this.setState({class_name: class_name});  
          }

    updateUserType(user_type) {
      this.setState({
        user_type: user_type
      })
    }
    

    handleSubmit = (e) => {
      e.preventDefault();
      const {class_name} = e.target
      const class_id = class_name.value
      console.log('submit login form: ' + class_id)
      this.props.history.push(`/welcome/${class_id}`) 
      
    }

    render() {

    console.log(this.props)
    console.log(this.context.classList)

    const classList = this
        .context
        .classList
        .map(
            (c, i) => <option value={c.class_id} key={i} id={c.class_id}>{c.class_name}</option>
          );
    
      
      


        return (
            <form
              className='loginForm'
              onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {this.context.error}
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
            <label htmlFor="class_name">Select a class: *</label>
            <select
                name="class_name"
                id="class_name"
                onChange={e => this.updateClassName(e.target.value)}
                aria-required="true">
                    <option value={"None"}>Select a class...</option>
                    {classList}
                    </select>
                </div>
        <div className="user-select">
          <label htmlFor="user_name">Log in as *</label>
          <select
            name="user_type"
            id="user_type"
            onChange={e => this.updateUserType(e.target.value)}
            aria-required="true">
            <option value={"None"}>Select a class...</option>
            <option value="teacher" key={1} id={1}>Teacher</option>
            <option value="parent" key={2} id={2}>Parent</option>
            <option value="student" key={3} id={3}>Student</option>
          </select>
        </div>

        <button 
          type="submit"
          className="login-button">
          Login
        </button>
        <button
          type='button' 
          onClick={() => this.props.history.push('/')}>
          Cancel
        </button>
      </form>
    )
  }
}

export default LoginForm;