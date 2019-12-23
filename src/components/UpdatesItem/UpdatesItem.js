import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import './UpdatesItem.css'

class UpdatesItem extends React.Component {

    static contextType = ClassesContext

    deleteRequest = (e) => {
        e.preventDefault();
        const updateId = this.props.match.params.updates
        const classId = this.props.match.params.class
        console.log(updateId)
        this.props.history.push(`/welcome/teacher/${classId}`);
        this.context.deleteUpdate(updateId)

    }

    render() {

    const userType = this.props.match.params.userType
    const classId = this.props.match.params.class
    const updateId = this.props.match.params.updates
    const classUpdates = this.context.updatesList.filter(update => update.class_id == classId)
    const updateItem = classUpdates.filter(update => update.update_id == updateId)
    console.log(updateItem)

        return (
            <div>
                <h2>Latest</h2>
                <div className="updates-item">
                <h3>{updateItem[0].headline}</h3>
                <p>{updateItem[0].content}</p>
                <p>{updateItem[0].author}</p>
                <p>{format(new Date(updateItem[0].date), 'do MMM yyyy')}</p>
            </div>
            <div className="updates-buttons">
            {userType === "teacher" && (
                    <button
                        type="button"
                        className="editUpdate">
                            <Link to={`/edit-update/${classId}/${updateId}`}>
                            Edit
                            </Link>
                       
                        </button>
                    )}
                {userType === "teacher" && (
                    <button
                        type="button"
                        className="deleteUpdate"
                        onClick={this.deleteRequest}>
                            Delete
                        </button>
                    )}
                <button 
                    type="button"
                    className="Button">
                        <Link to={`/latest/add-comment/${updateId}`} className="addCommentButton">
                            Comment
                        </Link>
                    </button>
                    <button 
                    type="button"
                    className="backButton"
                    onClick={() => this.props.history.goBack()}>
                        Back
                    </button>
            </div>
            <div className="updates-comments">
                <h3>Comments</h3>
                <ul>
                    comments placeholder
                </ul>
            </div>

            </div>
            
        )
    }
}

export default UpdatesItem;