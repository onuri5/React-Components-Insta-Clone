import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments)

  return (
    <div>
        {comments.map(comment => <p className="comment"><b>{comment.username}</b> {comment.text}</p>)}
    </div>
  );
};

export default Comments;
