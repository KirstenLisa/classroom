import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContexts'
import './HomeworkItem.css'

class HomeworkItem extends React.Component {

    static contextType = ClassesContext


    render() {

        const classId = 1
        const subject = "Math"
        const className = this.context.classList.filter(c => c.class_id === classId)
        const classHomework = this.context.homeworkList.filter(homework => homework.class_id === classId)
        const homework = classHomework.filter(homework => homework.subject === subject)
        console.log(homework[0])
        const teacherId = homework[0].teacher_id
        const teacherName = this.context.teachersList.filter(teacher => teacher.id === teacherId)
        console.log(teacherName)

        return (
            <div className="homework-item">
                <h2>{subject} homework for class {className[0].class_name}</h2>
                <h3>{teacherName[0].teacher_name}</h3>
                <ul className="homework">
                    To Do
                    <li>{homework[0].homework}</li>
                    <li>Due Date: {format(new Date(homework[0].due_date), 'do MMM yyyy')}</li>
            </ul>
            <div className="homework-buttons">
                <button 
                    type="button"
                    className="commentButton">
                        Comment
                    </button>
                    <button 
                    type="button"
                    className="backButton">
                        Back
                    </button>
            </div>
            <div className="homework-comments">
                <h3>Comments</h3>
            </div>
            </div>
            
        )
    }
}

export default HomeworkItem;
