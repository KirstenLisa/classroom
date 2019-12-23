import React, { Component } from 'react'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContext'
import './HomeworkList.css'

class HomeworkList extends Component {
    static contextType = ClassesContext

    getUnique = (arr, comp) => {

      const unique = arr
           .map(e => e[comp])
    
         // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
    
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
    
       return unique;
    }
  
    render() {

      const userType = this.props.match.params.userType
      const classId = this.props.match.params.class
      const homeworkForClass = this.context.homeworkList
      .filter(homework => homework.class_id == classId);
      const uniqueHomework = this.getUnique(homeworkForClass, 'subject')

      const homeworkList = uniqueHomework.map(
        (homework, i) => <li className="homework-list-subjects" key={i} id={homework.homework_id}>
          <Link to={`/homework/${userType}/${classId}/${homework.homework_id}`}>
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

  export default withRouter(HomeworkList);