import React from 'react';
import ClassesContext from '../../contexts/ClassesContext'
import UsersApiService from '../../services/users-api-service'
import UpdateApiService from '../../services/update-api-services'
import HomeworkApiService from '../../services/homework-api-service'
import './AddComment.css'

class AddComment extends React.Component {


    static contextType = ClassesContext;

    constructor(props) {
        super(props);
        this.state = {
          comment: '',
          date: new Date(),
          error: null
          }
        }

    

    componentDidMount() {
       this.context.clearError()
        UsersApiService.getUsers()
            .then(this.context.setUsersList)
            .then(console.log(this.context.usersList))
            .catch(this.context.setError)
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
        const { path } = this.props.match
        const { comment } = e.target
        const user_name = this.context.currentUser.username
        const user = (this.context.usersList.filter(user => user.username == user_name))
        const user_id = user[0].user_id
        

        

        const newComment = {
            comment: comment.value,
            user_name: user_name,
            date: new Date(),
            user_id: user_id, 
            page_id: this.props.match.params.pageToCommentOn   
        }

        console.log(newComment)
        

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


    render() {


        const {error} = this.state;
        const user_name = this.context.currentUser.username



        return(
            <form className="addCommentForm" onSubmit={e => this.handleSubmit(e)}>
                <div className='addComment_error' role='alert'>
                {error && <p>{error.message}</p>}
                </div>
                <h2>Write a comment</h2>
                
                <h3 className="userName">
                    User Name: <span>{user_name}</span>
                    </h3>
               
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