import React from 'react'
import './Comment.css'

class Comment extends React.Component {

    render() {

        return(
            <div className="comment-list">
                <p className="comment-text">{this.props.comment}</p>
                    <div className="comment-info">
                        <p className="date">{this.props.date}</p>
                        <p className="author">By  {this.props.author}</p>
                        </div>      
            </div>
        )
    }
}

export default Comment;