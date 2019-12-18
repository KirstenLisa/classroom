import React from 'react'
import { Link } from 'react-router-dom'
import ClassesContext from '../../contexts/ClassesContexts'
import './UpdatesItem.css'

class UpdatesItem extends React.Component {

    static contextType = ClassesContext

    render() {
    
    const classId = 2
    const updateId = 5
    const classUpdates = this.context.updatesList.filter(update => update.class_id === classId)
    const updateItem = classUpdates.filter(update => update.update_id === updateId)
    console.log(updateItem)
        return (
            <div>
                <h2>Latest</h2>
                <div className="updates-item">
                <h3>{updateItem[0].headline}</h3>
                <p>{updateItem[0].content}</p>
                <p>{updateItem[0].author}</p>
            </div>
            <div className="updates-buttons">
                <button 
                    type="button"
                    className="Button">
                        <Link to={`/add-comment/${updateId}`} className="addCommentButton">
                            Comment
                        </Link>
                    </button>
                    <button 
                    type="button"
                    className="backButton">
                        Back
                    </button>
            </div>
            <div className="updates-comments">
                <h3>Comments</h3>
            </div>

            </div>
            
        )
    }
}

export default UpdatesItem;