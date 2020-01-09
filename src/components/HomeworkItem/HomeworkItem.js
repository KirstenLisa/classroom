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
        console.log('component did mount')
        const homeworkId = this.props.match.params.homework
        this.context.clearError()
        ClassApiService.getClasses()
          .then(this.context.setClassList)
          .catch(this.context.setError)
        HomeworkApiService.getHomework()
          .then(this.context.setHomeworkList)
          //.then(console.log(this.context.homeworkList))
          .catch(this.context.setError)
        HomeworkApiService.getHomeworkComments(homeworkId)
          .then(this.context.setHomeworkCommentsList)
          //.then(console.log(this.props.match.params.homework))
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
        const subject = this.props.match.params.subject
        const classHomework = this.context.homeworkList.filter(homework => homework.class_id == classId)
        const homeworkId = this.props.match.params.homework
        const userType = this.props.match.params.userType
        const homework = classHomework.filter(homework => homework.homework_id == homeworkId)
       //console.log(this.context.homeworkList)
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
            <div className="homework-item">
                <button 
                        type="button"
                        className="backButton"
                        onClick={() => this.props.history.push(`/welcome/${userType}/${classId}`)}>
                            Back
                        </button>

                <h2>{homework[0].subject} homework for class {className[0].class_name}</h2>
                {homeworkList}
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
                
            <div className="homework-comments">
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
                        <Link to={`/add-comment/homework/${userType}/${homeworkId}`} className="addCommentButton">
                            Comment
                        </Link>
                    </button>
            </div>
            </div>
            
        )
    }
}

export default HomeworkItem;
