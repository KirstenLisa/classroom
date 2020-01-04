import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ClassesContext from '../../contexts/ClassesContext'
import UpdateApiService from '../../services/update-api-services'
import Comment from '../Comment/Comment'
import './UpdatesItem.css'

class UpdatesItem extends React.Component {

    static contextType = ClassesContext

    componentDidMount() {
        const updateId = this.props.match.params.updates
        console.log(updateId)
        this.context.clearError()
        UpdateApiService.getUpdates()
            .then(this.context.setUpdatesList)
            .catch(this.context.error)
        UpdateApiService.getUpdateComments(updateId)
          .then(this.context.setUpdatesCommentsList)
          .then(console.log(this.context))
          .catch(this.context.setError)
      }

    deleteRequest = (e) => {
        e.preventDefault();
        const updateId = this.props.match.params.updates
        const classId = this.props.match.params.class
        console.log(updateId)

        UpdateApiService.deleteUpdate(updateId)
            .then(this.context.deleteUpdate(updateId))
            .then(this.props.history.push(`/welcome/teacher/${classId}`))
            .catch(this.context.setError)
        

    }

    render() {

    const userType = this.props.match.params.userType
    const classId = this.props.match.params.class
    const updateId = this.props.match.params.updates
    const classUpdates = this.context.updatesList.filter(update => update.class_id == classId)
    const updateItem = classUpdates.filter(update => update.update_id == updateId)
    const commentsList = this.context.updatesCommentsList
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
            <div>
                  <button 
                    type="button"
                    className="backButton"
                    onClick={() => this.props.history.goBack()}>
                        Back
                    </button>

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
                        className="editButton">
                            <Link to={`/edit-update/${classId}/${updateId}`}>
                            Edit
                            </Link>
                       
                        </button>
                    )}
                {userType === "teacher" && (
                    <button
                        type="button"
                        className="deleteButton"
                        onClick={this.deleteRequest}>
                            Delete
                        </button>
                    )}
                
            </div>
            <div className="updates-comments">
                <h3>Comments</h3>
                {comment.length > 0 && (
                    <ul className="update-comments">
                        {comment}   
                    </ul>
                )}
                {!comment.length && (
                    <p>No comments</p>
                )}
                <button 
                    type="button"
                    className="addCommentButton">
                        <Link to={`/add-comment/latest/${userType}/${updateId}`} className="addCommentButton">
                            Comment
                        </Link>
                    </button>
            </div>

            </div>
            
        )
    }
}

export default UpdatesItem;