import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import './AddComment.css'

class AddComment extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          comment: '',
          user_name: '',
          date: new Date(),
          error: null
          }
        }


    updateComment(comment) {
        this.setState({comment: comment})
    }
    
    updateUserName(user_name) {
        this.setState({user_name: user_name});
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log('submit comment')
      

        const {comment, user_name} = e.target
        

        const newComment = {
            comment: comment.value,
            user_name: user_name.value,
            date: new Date(),
            page_id: this.props.match.params.pageToCommentOn   
        }

        console.log(newComment)

        this.context.addComment(newComment)
        this.props.history.goBack()  
    }


    render() {

        const {error} = this.state;

        console.log(this.props.match.params.pageToCommentOn)



        return(
            <form className="addCommentForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addComment_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Write a comment</h2>
                <div className="noteName">* required field</div>
                
                <div className="form-group">
                    <label htmlFor="user_name">User Name</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="user_name"
                        id="user_name"
                        onChange={e => this.updateUserName(e.target.value)}
                        aria-required="true" 
                        />
                </div>
               
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <input
                        type="text"
                        className="registration_control"
                        name="comment"
                        id="comment"
                        onChange={e => this.updateComment(e.target.value)}
                        aria-required="true" 
                        />   
                </div>

                <div className="comment_button_group">
                    <button type='button' onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
           
                    <button
                        type="submit"
                        className="save_button">
                            Post
                    </button>
                </div>

            </form>
        )
    }
}

export default AddComment;