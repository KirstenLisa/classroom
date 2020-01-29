import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import HomeworkApiService from '../../services/homework-api-service'
import ClassApiService from '../../services/classes-api-service';
import Homework from '../Homework/Homework'
import Comment from '../Comment/Comment'
import './HomeworkItem.css'

class HomeworkItem extends React.Component {

    static contextType = ClassesContext

    componentDidMount() {
        const homeworkId = this.props.match.params.homework
        this.context.clearError()
        ClassApiService.getClasses()
          .then(this.context.setClassList)
          .catch(this.context.setError)
        HomeworkApiService.getHomework()
          .then(this.context.setHomeworkList)
          .catch(this.context.setError)
        HomeworkApiService.getHomeworkComments(homeworkId)
          .then(this.context.setHomeworkCommentsList)
          .catch(this.context.setError)
      }

    deleteRequest = (e) => {
        e.preventDefault();
        const homeworkId = this.props.match.params.homework
        const classId = this.props.match.params.class


        HomeworkApiService.deleteHomework(homeworkId)
            .then(this.context.deleteHomework(homeworkId))
            .then(this.props.history.push(`/welcome/teacher/${classId}`))
            .catch(this.context.setError)
    }

  
    render() {

        const classId = this.props.match.params.class
        const className = this.context.classList.filter(c => c.class_id == classId)
        const currentClass = className.map(c =>  c.class_name)
        const subject = this.props.match.params.subject
        const classHomework = this.context.homeworkList.filter(homework => homework.class_id == classId)
        const homeworkId = this.props.match.params.homework
        const userType = this.props.match.params.userType
        const homework = classHomework.filter(homework => homework.homework_id == homeworkId)
    
        const homeworkList = homework.map(
            (homework, i) => 
                    <li className="homework" id={homework.homework_id} key={i}>
                            <Homework
                                id={homework.id}
                                subject={homework.subject}
                                homework={homework.homework}
                                due_date={format(new Date(homework.due_date), 'do MMM yyyy')}
                                teacher_name={homework.teacher_name}
                                class_id={homework.class_id}
                                />
                
                    </li>)
        
        const commentsList = this.context.homeworkCommentsList
        const comment = commentsList.map(
                        (comment, i) => 
                        <li className="comment" id={comment.id} key={i}>
                            <Comment 
                                comment={comment.comment}
                                date={format(new Date(), 'do MMM yyyy')}
                                author={comment.user_name}
                                id={comment.comment_id}
                                />
            </li>);

     


        return (
            <div className="homework-item-page">
                <h2>{subject} homework for class {currentClass[0]}</h2>
            
            <div className="no-headline">
                <div className="homework-item-all">
                <button 
                        type="button"
                        className="backButton"
                        onClick={() => this.props.history.push(`/welcome/${classId}`)}>
                            Back
                        </button>
                        <div className="homework-list">
                        {homeworkList}
                        </div>
                
               <div>
                {userType === "teacher" && (
                <button 
                        type="button"
                        className="teacher-only-buttons">
                            <Link to={`/add-homework/${classId}/${homeworkId}/${subject}`} 
                                className="addHomeworkButton">
                                Add
                            </Link>
                        </button>)}                   
                </div>
                </div>
                
            <div className="homework-comments-all">
                <h3>Comments</h3>
                
                {comment.length > 0 && (
                    <ul className="homework-comments">
                        {comment}   
                    </ul>
                )}
                {!comment.length && (
                    <p>No comments</p>
                )}
                <button 
                    type="button"
                    className="addCommentButton">
                        <Link to={`/add-comment/homework/${userType}/${homeworkId}`} className="addCommentButtonLink">
                            Comment
                        </Link>
                    </button>
            </div>
            </div>
            </div>
            
        )
    }
}

export default HomeworkItem;
