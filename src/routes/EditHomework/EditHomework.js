import React from 'react';
import ValidationError from '../../components/ValidationError';
import ClassesContext from '../../contexts/ClassesContext';
import TeacherApiServices from '../../services/teachers-api-services';
import HomeworkApiService from '../../services/homework-api-service';
import './EditHomework.css';

class EditHomework extends React.Component {
  static contextType = ClassesContext;

  constructor(props) {
    super(props);
    this.state = {
      homework: { value: '', touched: false },
      due_date: { value: '', touched: false },
      teacher_id: '',
      error: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.context.clearError();

    TeacherApiServices.getTeachers()
      .then(this.context.setTeachersList)
      .catch(this.context.setError);

    HomeworkApiService.getHomeworkItem(id)
      .catch(this.context.error)
      .then(responseData => {
        this.setState({
          id: responseData.id,
          homework_id: responseData.homework_id,
          subject: responseData.subject,
          homework: { value: responseData.homework, touched: false },
          due_date: responseData.due_date,
          teacher_id: responseData.teacher_id,
          teacher_name: responseData.teacher_name
        });
      });
  }

  validateHomework() {
    const { homework } = this.state;
    if (homework === undefined) {
      return 'Content is required';
    }
    if (homework.value.length < 3) {
      return 'Homework must be at least 3 characters long';
    }
  }

  validateDate() {
    const due_date = this.state.due_date.value;
    if (due_date === 'None' || due_date === '' || due_date === undefined) {
      return 'Date is required';
    }
  }

  updateHomework(homework) {
    this.setState({ homework: { value: homework, touched: true } });
  }

  updateDate(due_date) {
    this.setState({ due_date: { value: due_date, touched: true } });
  }

  updateTeacher(teacher_id) {
    this.setState({ teacher_id: { value: teacher_id, touched: true } });
  }

  validateForm() {
    if (this.validateHomework()) {
      this.setState({ homework: { touched: true } });
    } else if (this.validateDate()) {
      this.setState({ due_date: { touched: true } });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const homework_id = this.props.match.params.homework;
    const class_id = this.props.match.params.class;

    const { homework, due_date, teacher_id } = e.target;
    const { teachersList } = this.context;
    const teacher = teachersList.filter(
      teacher => teacher.id == teacher_id.value
    );
    const teacherName = teacher[0].teacher_name;

    const updatedHomework = {
      id,
      homework_id,
      subject: this.state.subject,
      homework: homework.value,
      due_date: due_date.value,
      teacher_id: teacher_id.value,
      teacher_name: teacherName,
      class_id
    };

    if (this.validateForm()) {
      return null;
    }
    if (this.validateHomework() || this.validateDate()) {
      return null;
    }

    HomeworkApiService.updateHomework(id, updatedHomework)
      .then(this.context.updateHomework(updatedHomework))
      .then(
        this.props.history.push(
          `/homework/teacher/${class_id}/${homework_id}/${this.state.subject}`
        )
      )
      .catch(this.context.setError);
  }

  render() {
    const { error } = this.state;
    const teacherId = this.state.teacher_id;
    const uniqueTeachersList = this.context.teachersList.filter(
      teacher => teacher.id !== teacherId
    );
    const teachersList = uniqueTeachersList.map((teacher, i) => (
      <option value={teacher.id} key={i} id={teacher.id}>
        {teacher.teacher_name}
      </option>
    ));

    return (
      <form className='editHomeworkForm' onSubmit={e => this.handleSubmit(e)}>
        <div className='editHomework_error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <h2>Edit homework</h2>

        <div className='edit-homework'>
          <label htmlFor=''>Homework</label>
          <textarea
            type='text'
            className='edit_homework_input'
            name='homework'
            id='homework'
            value={this.state.homework.value}
            onChange={e => this.updateHomework(e.target.value)}
            aria-required='true'
          />
        </div>

        <div className='homework-error'>
          {this.state.homework.touched && (
            <ValidationError
              message={this.validateHomework()}
              id='homeworkError'
            />
          )}
        </div>
        <div className='teacher-select'>
          <label htmlFor='teacher_name'>Select: </label>
          <select
            name='teacher_id'
            className='edit_homework_select'
            onChange={e => this.updateTeacher(e.target.value)}
            aria-required='true'
          >
            <option value={this.state.teacher_id}>
              {this.state.teacher_name}
            </option>

            {teachersList}
          </select>
        </div>

        <div className='date-select'>
          <label htmlFor='due_date'>Due Date </label>
          <input
            type='date'
            className='edit_homework_select'
            name='due_date'
            id='due_date'
            onChange={e => this.updateDate(e.target.value)}
            aria-required='true'
          />
        </div>
        <div className='date-error'>
          {this.state.due_date.touched && (
            <ValidationError message={this.validateDate()} id='dateError' />
          )}
        </div>

        <div className='update_button_group'>
          <button
            className='cancelEditHomework'
            type='button'
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </button>

          <button type='submit' className='submitEditHomework'>
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default EditHomework;
