import CommentsList from '../commentslist/CommentsList';
import CommentForm from '../commentform/CommentForm';
import React, { useState } from 'react';
import './commentpage.scss';

const CommentPage = () => {
  const [newComment, setNewComment] = useState(false);

  return (
    <>
      <main className='main'>
        <div className='main__wrapper'>
          <div className='main__form'>
            <CommentForm
              submitted={() => {
                setNewComment(true);
              }}
            />
          </div>
          <div className='main__comments'>
            <CommentsList
              newComment={newComment}
              newCommentUpdated={() => {
                setNewComment(false);
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default CommentPage;
