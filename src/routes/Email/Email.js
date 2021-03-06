import React from 'react';
import ClassesContext from '../../contexts/ClassesContext';
import './Email.css';

class Email extends React.Component {
  static contextType = ClassesContext;

  render() {
    const classId = window.sessionStorage.getItem('classId');
    const classInfo = this.context.classList.filter(c => c.class_id == classId);
    const classTeacher = classInfo.map(c => c.class_teacher);

    return (
      <form className='emailForm' onSubmit={e => this.handleSubmit(e)}>
        <h2>Write the class teacher</h2>

        <div className='emailAddress'>
          <label htmlFor='emailAddress'>To</label>
          <input
            type='text'
            className='email_input'
            name='email-adress'
            id='email-address'
            aria-required='true'
            value={classTeacher}
          />
        </div>

        <div className='emailSubject'>
          <label htmlFor='emailSubject'>Subject</label>
          <input
            type='text'
            className='email_input'
            name='email-subject'
            id='email-subject'
            aria-required='true'
          />
        </div>

        <div className='emailBody'>
          <label htmlFor='emailContent' />
          <textarea
            type='text'
            className='email_textarea'
            name='email_body'
            id='email_body'
            aria-required='true'
            placeholder='Write a message'
          />
        </div>

        <div className='email_button_group'>
          <button
            type='button'
            className='cancelEmailButton'
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </button>

          <button type='submit' className='submitEmailButton'>
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default Email;
