import React from 'react'
import './Comment.css'

class Comment extends React.Component {

    render() {

        return(
            <div className="comment">
                <h3>{this.props.comment}</h3>
                    <p className="date">{this.props.date}</p>
                    <p className="author">By  {this.props.author}</p>
            </div>
        )
    }
}

export default Comment;