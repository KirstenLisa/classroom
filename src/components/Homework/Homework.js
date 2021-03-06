/* eslint-disable react/static-property-placement */
/* eslint-disable react/sort-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ClassesContext from '../../contexts/ClassesContext';
import HomeworkApiService from '../../services/homework-api-service';
import './Homework.css';

class Homework extends React.Component {
  static contextType = ClassesContext;

  deleteRequest = e => {
    e.preventDefault();
    const { id } = this.props;
    const classId = this.props.match.params.class;

    HomeworkApiService.deleteHomework(id)
      .then(this.context.deleteHomework(id))
      .then(this.props.history.push(`/welcome/${classId}`))
      .catch(this.context.setError);
  };

  render() {
    const { userType } = this.props.match.params;
    const homeworkId = this.props.match.params.homework;

    return (
      <div className='homework'>
        <div className='Subjects'>
          <p>
            <b>To Do: </b>
            {this.props.homework}
          </p>
          <p>
            <b>Until: </b>
            {this.props.due_date}
          </p>
          <p>
            <b>Teacher: </b>
            {this.props.teacher_name}
          </p>
        </div>
        <div className='homework-buttons'>
          {userType === 'teacher' && (
            <button type='button' className='teacher-only-buttons'>
              <Link
                to={`/edit-homework/${this.props.class_id}/${homeworkId}/${this.props.id}`}
              >
                Edit
              </Link>
            </button>
          )}
          {userType === 'teacher' && (
            <button
              type='button'
              className='teacher-only-buttons'
              onClick={this.deleteRequest}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Homework);
