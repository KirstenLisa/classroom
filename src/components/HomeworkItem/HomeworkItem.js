import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import Homework from '../Homework/Homework'
import Comment from '../Comment/Comment'
import './HomeworkItem.css'

class HomeworkItem extends React.Component {

    static contextType = ClassesContext

    deleteRequest = (e) => {
        e.preventDefault();
        const homeworkId = this.props.match.params.homework
        const classId = this.props.match.params.class
        console.log(homeworkId)
        this.context.deleteHomework(homeworkId)
        this.props.history.push(`/welcome/teacher/${classId}`);
        
        

    }

  
    render() {

        const classId = this.props.match.params.class
        const className = this.context.classList.filter(c => c.class_id == classId)
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
                                <div className="homework-buttons">
                {userType === "teacher" && (
                    <button
                        type="button"
                        className="teacher-only-buttons">
                            <Link
                                to={`/edit-homework/${homework.class_id}/${homework.homework_id}/${homework.id}`}>
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
                    </li>)
        
        const commentsList = this.context.commentsList.filter(comment => comment.page_id == homeworkId)
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
                            <Link to={`/add-homework/${classId}/${homeworkId}`} 
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
                        <Link to={`/homework/add-comment/${homeworkId}`} className="addCommentButton">
                            Comment
                        </Link>
                    </button>
            </div>
            </div>
            
        )
    }
}

export default HomeworkItem;
