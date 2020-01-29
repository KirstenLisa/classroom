import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import ValidationError from '../../components/ValidationError'
import UsersApiService from '../../services/users-api-service'
import UpdateApiService from '../../services/update-api-services'
import HomeworkApiService from '../../services/homework-api-service'
import './AddComment.css'

class AddComment extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          comment: {value: '', touched: false},
          date: new Date(),
          error: null
          }
        }

    

    componentDidMount() {
       this.context.clearError()
        UsersApiService.getUsers()
            .then(this.context.setUsersList)
            .catch(this.context.setError)
          }

    validateContent() {
      const content = this.state.comment.value;
        if (content === undefined) {
          return 'Content is required';
        } else if (content.length < 3) {
          return 'Comment must be at least 3 characters long';
    }
  }

    updateComment(comment) {
        this.setState({comment: {value: comment, touched: true}})
    }
    
    updateUserName(user_name) {
        this.setState({user_name: user_name});
    }

    validateForm() {
        if (this.validateContent()) {
          this.setState({comment: {touched:true}})
        }
    }


    handleSubmit(e) {
        e.preventDefault();

        if (this.validateForm()) {
            return null 
          
          } else if (this.validateContent()) {
          
            return null
          } else {
      
        const { path } = this.props.match
        const { comment } = e.target
        const user_name = sessionStorage.getItem('username')
        const user = (this.context.usersList.filter(user => user.username == user_name))
        const user_id = user[0].user_id
        

        

        const newComment = {
            comment: comment.value,
            user_name: user_name,
            date: new Date(),
            user_id: user_id, 
            page_id: this.props.match.params.pageToCommentOn   
        }
        

        if (path.includes('latest')) {
        UpdateApiService.postComment(newComment)
             .then(this.context.addUpdateComment)
             .then(this.props.history.goBack())
             .catch(this.context.setError)
        } else {
        HomeworkApiService.postComment(newComment)
            .then(this.context.addHomeworkComment)
            .then(this.props.history.goBack())
            .catch(this.context.setError)
        }
          }
    }


    render() {


        const {error} = this.state;
        const user_name = sessionStorage.getItem('username')

        return(
            <form className="addCommentForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addComment_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Write a comment</h2>
                
                <h3 className="userName">
                    User Name: <span>{user_name}</span>
                    </h3>
               
                <div className="comment">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        type="text"
                        className="comment_input"
                        name="comment"
                        id="comment"
                        onChange={e => this.updateComment(e.target.value)}
                        aria-required="true" 
                        />   
                </div>
                <div className="comment_error">
                        {this.state.comment.touched && 
                        (<ValidationError message={this.validateContent()} id="commentError" />)}
                </div>

                <div className="comment_button_group">
                    <button type='button' className='cancelCommentButton' onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
           
                    <button
                        type="submit"
                        className="submitCommentButton">
                            Post
                    </button>
                </div>

            </form>
        )
    }
}

export default AddComment;