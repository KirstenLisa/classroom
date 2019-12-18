import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContexts'
import './HomeworkList.css'

export default class HomeworkList extends Component {
    static contextType = ClassesContext
  
    render() {

      const userType = "parent"
      const classId = 1
      //console.log(class_id)
      const homeworkForClass = this.context.homeworkList
      .filter(homework => homework.class_id === classId);
      const homeworkList = homeworkForClass.map(
        (homework, i) => <li className="homework-list-subjects" key={i} id={i}>
          <Link to={`/homework/${userType}/${classId}/${homework.subject}`}>
            {homework.subject}
          </Link>
        </li>
      )
     
  
      return (
          <div className="start-page">
              {homeworkList}
          </div>
        
      )
    }
  }