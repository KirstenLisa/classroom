import React from 'react';
import ClassesContext from '../../contexts/ClassesContext';
import HomeworkApiService from '../../services/homework-api-service';
import TeacherApiServices from '../../services/teachers-api-services';
import ValidationError from '../../components/ValidationError';
import './AddHomework.css';

class AddHomework extends React.Component {
  static contextType = ClassesContext;

  constructor(props) {
    super(props);
    this.state = {
      homework: { value: '', touched: false },
      subject: '',
      due_date: { value: '', touched: false },
      teacher_id: '',
      teacher_name: { value: 'None', touched: false },
      error: null
    };
  }

  componentDidMount() {
    this.context.clearError();
    TeacherApiServices.getTeachers()
      .then(this.context.setTeachersList)
      .catch(this.context.setError);
  }

  updateHomework(homework) {
    this.setState({ homework: { value: homework, touched: true } });
  }

  updateDate(due_date) {
    this.setState({ due_date: { value: due_date, touched: true } });
  }

  updateTeacherId(teacher_name) {
    const teacher = this.context.teachersList.filter(
      teacher => teacher.teacher_name == teacher_name
    );
    const teacher_id = teacher[0].id;
    this.setState({ teacher_id });
  }

  updateTeacherName(teacher_name) {
    this.setState({ teacher_name: { value: teacher_name, touched: true } });
    this.updateTeacherId(teacher_name);
  }

  validateHomework() {
    const homework = this.state.homework.value;
    if (homework === undefined) {
      return 'Homework is required';
    }
    if (homework.length < 4) {
      return 'Homework must be at least 4 characters long';
    }
  }

  validateTeacher() {
    const selectedTeacher = this.state.teacher_name.value;
    if (
      selectedTeacher === 'None' ||
      selectedTeacher === '' ||
      selectedTeacher === undefined
    ) {
      return 'Teacher is required';
    }
  }

  validateDate() {
    const due_date = this.state.due_date.value;
    if (due_date === 'None' || due_date === '' || due_date === undefined) {
      return 'Date is required';
    }
  }

  validateForm() {
    if (this.validateHomework()) {
      this.setState({ homework: { touched: true } });
    } else if (this.validateTeacher()) {
      this.setState({ teacher_name: { touched: true } });
    } else if (this.validateDate()) {
      this.setState({ due_date: { touched: true } });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      return null;
    }
    if (
      this.validateHomework() ||
      this.validateTeacher() ||
      this.validateDate()
    ) {
      return null;
    }

    const class_id = this.props.match.params.class;
    const homework_id = this.props.match.params.homework;
    const { subject } = this.props.match.params;

    const { homework, due_date, teacher_name } = e.target;

    const newHomework = {
      homework_id,
      subject,
      homework: homework.value,
      due_date: due_date.value,
      teacher_id: this.state.teacher_id,
      teacher_name: teacher_name.value,
      class_id
    };

    HomeworkApiService.postHomework(newHomework)
      .then(this.context.addHomework)
      .then(
        this.props.history.push(
          `/homework/teacher/${class_id}/${homework_id}/${subject}`
        )
      )
      .catch(this.context.setError);
  }

  render() {
    const { error } = this.state;
    const { subject } = this.props.match.params;
    const teachersList = this.context.teachersList.map((teacher, i) => (
      <option value={teacher.teacher_name} key={i} id={teacher.teacher_id}>
        {teacher.teacher_name}
      </option>
    ));

    const homeworkError = this.validateHomework();
    const teacherError = this.validateTeacher();
    const dateError = this.validateDate();

    return (
      <form className='addHomeworkForm' onSubmit={e => this.handleSubmit(e)}>
        <div className='addHomework_error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <h2>Add more homework</h2>

        <h3 className='subject'>
          Subject: <span>{subject}</span>
        </h3>

        <div className='add-homework-input'>
          <label htmlFor='homework'>Homework</label>
          <textarea
            type='text'
            className='homework_textarea'
            name='homework'
            id='homework'
            onChange={e => this.updateHomework(e.target.value)}
            aria-required='true'
          />
        </div>
        <div className='homework_error'>
          {this.state.homework.touched && (
            <ValidationError message={homeworkError} id='homeworkError' />
          )}
          </div>

        <div className='add-homework-input'>
          <label htmlFor='teacher_name'>Select: </label>
          <select
            name='teacher_name'
            className='homework_select'
            onChange={e => this.updateTeacherName(e.target.value)}
            aria-required='true'
          >
            <option value='None'>Teacher...</option>
            {teachersList}
          </select>
        </div>
        <div className='homework_error'>
          {this.state.teacher_name.touched && (
            <ValidationError message={teacherError} id='teacherError' />
          )}
        </div>

        <div className='add-homework-input'>
          <label htmlFor='due_date'>Due Date </label>
          <input
            type='date'
            className='homework_input'
            name='due_date'
            id='due_date'
            onChange={e => this.updateDate(e.target.value)}
            aria-required='true'
          />
        </div>
        <div className='homework_error'>
          {this.state.due_date.touched && (
            <ValidationError message={dateError} id='dateError' />
          )}
        </div>

        <div className='homework_button_group'>
          <button
            type='button'
            className='cancelHomeworkButton'
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </button>

          <button type='submit' className='submitHomeworkButton'>
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default AddHomework;
