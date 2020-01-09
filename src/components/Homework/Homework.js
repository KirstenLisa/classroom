import React from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import ClassesContext from '../../contexts/ClassesContext'
import HomeworkApiService from '../../services/homework-api-service'
import './Homework.css'

class Homework extends React.Component {

    static contextType = ClassesContext;


    deleteRequest = (e) => {
        e.preventDefault();
        const id = this.props.id
        const classId = this.props.match.params.class
        console.log(id)


        HomeworkApiService.deleteHomework(id)
            .then(this.context.deleteHomework(id))
            .then(this.props.history.push(`/welcome/teacher/${classId}`))
            .catch(this.context.setError)
    }

    render() {

        const userType = this.props.match.params.userType
        const homework_id = this.props.match.params.homework
        console.log(homework_id)

        return(
            
                <div className="homework">
                    <div className="Subjects">
                        <p><b>To Do: </b>{this.props.homework}</p>
                        <p><b>Until: </b>{this.props.due_date}</p>
                        <p><b>Teacher: </b>{this.props.teacher_name}</p>
                    </div>
                    <div className="homework-buttons">
                {userType === "teacher" && (
                    <button
                        type="button"
                        className="teacher-only-buttons">
                            <Link
                                to={`/edit-homework/${this.props.class_id}/${homework_id}/${this.props.id}`}>
                            Edit
                            </Link>
                      
                        </button>
                    )}
                {userType === "teacher" && (
                    <button
                        type="button"
                        className="teacher-only-buttons"
                        onClick={this.deleteRequest}>
                            Delete
                        </button>
                    )}
                
                    </div>
                </div>
           
        )
    }
}

export default withRouter(Homework);