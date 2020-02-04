import React from 'react';
import { withRouter } from 'react-router';
import ClassesContext from '../../contexts/ClassesContext';
import ValidationError from '../ValidationError';
import UsersApiService from '../../services/users-api-service';
import TeacherApiService from '../../services/teachers-api-services';
import ClassApiService from '../../services/classes-api-service';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {
  static contextType = ClassesContext;

  constructor(props) {
    super(props);
    this.state = {
      fullname: { value: '', touched: false },
      username: { value: '', touched: false },
      password: { value: '', touched: false },
      class_id: { value: 'None', touched: false },
      user_type: { value: 'None', touched: false },
      error: null
    };
  }

  componentDidMount() {
    this.context.clearError();
    TeacherApiService.getTeachers()
      .then(this.context.setTeacherList)
      .catch(this.context.setError);
    ClassApiService.getClasses()
      .then(this.context.setClassList)
      .catch(this.context.setError);
  }

  updateFullname(fullname) {
    this.setState({ fullname: { value: fullname, touched: true } });
  }

  updateUsername(username) {
    this.setState({ username: { value: username, touched: true } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  updateClassId(class_id) {
    this.setState({ class_id: { value: class_id, touched: true } });
  }

  updateUserType(user_type) {
    this.setState({ user_type: { value: user_type, touched: true } });
  }

  validateFullName() {
    const fullName = this.state.fullname.value;
    if (fullName === undefined) {
      return 'Your full name is required';
    }
    if (fullName.length < 3) {
      return 'Full name must be at least 3 characters long';
    }
  }

  validateUserName() {
    const userName = this.state.username.value;
    if (userName === undefined) {
      return 'Username is required';
    }
    if (userName.length < 3) {
      return 'Username must be at least 3 characters long';
    }
  }

  validatePassword() {
    const password = this.state.password.value;
    if (password === undefined) {
      return 'password is required';
    }
    if (password.length < 9) {
      return 'Password must be at least 8 characters long';
    }
  }

  validateClassSelection() {
    const selectedClassId = this.state.class_id.value;
    if (
      selectedClassId === 'None' ||
      selectedClassId === '' ||
      selectedClassId === undefined
    ) {
      return 'Class is required';
    }
  }

  validateUserSelection() {
    const selectedUser = this.state.user_type.value;
    if (
      selectedUser === 'None' ||
      selectedUser === '' ||
      selectedUser === undefined
    ) {
      return 'User type is required';
    }
  }

  validateRegistrationForm() {
    if (this.validateFullName()) {
      this.setState({ fullname: { touched: true } });
    } else if (this.validateUserName()) {
      this.setState({ username: { touched: true } });
    } else if (this.validatePassword()) {
      this.setState({ password: { touched: true } });
    } else if (this.validateClassSelection()) {
      this.setState({ class_id: { touched: true } });
    } else if (this.validateUserSelection()) {
      this.setState({ user_type: { touched: true } });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { fullname, username, password, class_id, user_type } = e.target;

    if (this.validateRegistrationForm()) {
      return null;
    }
    UsersApiService.postUser({
      fullname: fullname.value,
      username: username.value,
      password: password.value,
      class_id: class_id.value,
      user_type: user_type.value
    })
      .then(user => {
        fullname.value = '';
        username.value = '';
        password.value = '';
        class_id.value = '';
        user_type.value = '';
        this.props.history.push('/login');
      })
      .catch(res => {
        this.setState({
          error: {
            message: res.error
          }
        });
      });
  };

  render() {
    const classList = this.context.classList.map((c, i) => (
      <option value={c.class_id} key={i} id={c.class_id}>
        {c.class_name}
      </option>
    ));

    const { error } = this.state;

    const fullNameError = this.validateFullName();
    const userNameError = this.validateUserName();
    const passwordError = this.validatePassword();
    const classIdError = this.validateClassSelection();
    const userTypeError = this.validateUserSelection();

    return (
      <form className='registration-form' onSubmit={this.handleSubmit}>
        <div role='alert' className='registrationError'>
          {error && <p>{error.message}</p>}
        </div>

        <div className='fullname'>
          <label htmlFor='RegistrationForm__full_name'>Full name</label>
          <input
            type='text'
            className='registration_input'
            name='fullname'
            id='fullname'
            onChange={e => this.updateFullname(e.target.value)}
            aria-required='true'
            placeholder='Full Name'
          />
          <div className='registration_error'>
            {this.state.fullname.touched && (
              <ValidationError message={fullNameError} id='fullNameError' />
            )}
          </div>
        </div>

        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>User name</label>
          <input
            type='text'
            className='registration_input'
            name='username'
            id='username'
            onChange={e => this.updateUsername(e.target.value)}
            aria-required='true'
            placeholder='User Name'
          />
          <div className='registration_error'>
            {this.state.username.touched && (
              <ValidationError message={userNameError} id='userNameError' />
            )}
          </div>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>Password</label>
          <input
            className='registration_input'
            name='password'
            id='password'
            type='password'
            onChange={e => this.updatePassword(e.target.value)}
            aria-required='true'
            placeholder='Password'
          />
          <div className='registration_error'>
            {this.state.password.touched && (
              <ValidationError message={passwordError} id='passwordError' />
            )}
          </div>
        </div>
        <div className='class-select'>
          <label htmlFor='class_id'>Select class: </label>
          <select
            name='class_id'
            className='registration_select'
            onChange={e => this.updateClassId(e.target.value)}
            aria-required='true'
          >
            <option value='None'>Select class...</option>
            {classList}
          </select>
        </div>
        <div className='registration_error'>
          {this.state.class_id.touched && (
            <ValidationError message={classIdError} id='classIdError' />
          )}
        </div>
        <div className='user-select'>
          <label htmlFor='user_name'> Register as: </label>
          <select
            name='user_type'
            id='user_type'
            className='registration_select'
            onChange={e => this.updateUserType(e.target.value)}
            aria-required='true'
          >
            <option value='None'>Select... </option>
            <option value='teacher' key={1} id={1}>
              Teacher
            </option>
            <option value='parent' key={2} id={2}>
              Parent
            </option>
            <option value='student' key={3} id={3}>
              Student
            </option>
          </select>
          <div className='registration_error'>
            {this.state.user_type.touched && (
              <ValidationError message={userTypeError} id='userTypeError' />
            )}
          </div>
        </div>
        <div className='registration-form-buttons'>
          <button type='submit' className='submitRegistration'>
            Register
          </button>
          <button
            type='button'
            className='cancelRegistration'
            onClick={() => this.props.history.push('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
