import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ClassesContext from '../../contexts/ClassesContext';
import UpdateApiService from '../../services/update-api-services';
import Comment from '../Comment/Comment';
import './UpdatesItem.css';


class UpdatesItem extends React.Component {
  static contextType = ClassesContext;

  componentDidMount() {
    const updateId = this.props.match.params.updates;
    this.context.clearError();
    UpdateApiService.getUpdates()
      .then(this.context.setUpdatesList)
      .catch(this.context.error);
    UpdateApiService.getUpdateComments(updateId)
      .then(this.context.setUpdatesCommentsList)
      .catch(this.context.setError);
  }

  deleteRequest = e => {
    e.preventDefault();
    const updateId = this.props.match.params.updates;
    const classId = this.props.match.params.class;

    UpdateApiService.deleteUpdate(updateId)
      .then(this.context.deleteUpdate(updateId))
      .then(this.props.history.push(`/welcome/${classId}`))
      .catch(this.context.setError);
  };

  render() {
    const { userType } = this.props.match.params;
    const classId = this.props.match.params.class;
    const updateId = this.props.match.params.updates;
    const classUpdates = this.context.updatesList.filter(
      update => update.class_id == classId
    );
    const updateItem = classUpdates.filter(
      update => update.update_id == updateId
    );
    const headline = updateItem.map(update => update.headline);
    const content = updateItem.map(update => update.content);
    const author = updateItem.map(update => update.author);
    const date = updateItem.map(update => update.date);


    const commentsList = this.context.updatesCommentsList;
    const comment = commentsList.map((comment, i) => (
      <li className='comment' id={comment.id} key={i}>
        <Comment
          comment={comment.comment}
          date={format(new Date(comment.date), 'do MMM yyyy')}
          author={comment.user_name}
          id={comment.comment_id}
        />
      </li>
    ));

    return (
      <div>
        <h2>Latest</h2>
        <div className='no-headline'>
          <div className='update-items-all'>
            <button
              type='button'
              className='backButton'
              onClick={() => this.props.history.goBack()}
            >
              Back
            </button>
            <div className='updates-item'>
              <h3>{headline[0]}</h3>
              <p>{content[0]}</p>
              <p>{author[0]}</p>
              {date == undefined || date == [] || date == ''? 
              (<p>no date</p>)
              :
              (<p>{format(new Date(date), 'do MMM yyyy')}</p>)}
            </div>
            <div className='updates-buttons'>
              {userType === 'teacher' && (
                <button type='button' className='editButton'>
                  <Link to={`/edit-update/${classId}/${updateId}`}>Edit</Link>
                </button>
              )}
              {userType === 'teacher' && (
                <button
                  type='button'
                  className='deleteButton'
                  onClick={this.deleteRequest}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          <div className='updates-comments'>
            <h3>Comments</h3>
            {comment.length > 0 && (
              <ul className='update-comments-inner'>{comment}</ul>
            )}
            {!comment.length && <p>No comments</p>}
            <button type='button' className='addCommentButton'>
              <Link
                to={`/add-comment/latest/${userType}/${updateId}`}
                className='addCommentButtonLink'
              >
                Comment
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

UpdatesItem.defaultProps = {
  params: {
    class: 1,
    userType: 'student',
    updates: 111
  }
};

export default UpdatesItem;
