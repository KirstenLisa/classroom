import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ClassesContext from '../../contexts/ClassesContext';
import HomeworkApiService from '../../services/homework-api-service';
import ClassApiService from '../../services/classes-api-service';
import './HomeworkList.css';

class HomeworkList extends Component {
  static contextType = ClassesContext;

  componentDidMount() {
    this.context.clearError();
    HomeworkApiService.getHomework()
      .then(this.context.setHomeworkList)
      .catch(this.context.setError);
    ClassApiService.getClasses()
      .then(this.context.setClassList)
      .catch(this.context.setError);
  }

  getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  };

  render() {
    const userType = sessionStorage.getItem('userType');
    const classId = sessionStorage.getItem('classId');
    console.log(userType, classId);

    const homeworkForClass = this.context.homeworkList.filter(
      homework => homework.class_id == classId
    );
    const uniqueHomework = this.getUnique(homeworkForClass, 'subject');

    const homeworkList = uniqueHomework.map((homework, i) => (
      <li className='homework-list-subjects' key={i} id={homework.homework_id}>
        <Link
          className='homework-link'
          to={`/homework/${userType}/${classId}/${homework.homework_id}/${homework.subject}`}
        >
          {homework.subject}
        </Link>
      </li>
    ));

    return <div className='homework-page'>{homeworkList}</div>;
  }
}

export default withRouter(HomeworkList);
