import React from 'react';
import './Comment.css';

function Comment(props) {
  const { date } = props;
  const { comment } = props;
  const { author } = props;

  return (
    <div className='comment-list'>
      <p className='comment-text'>{comment}</p>
      <div className='comment-info'>
        <p className='date'>{date}</p>
        <p className='author'>By {author}</p>
      </div>
    </div>
  );
}

export default Comment;
