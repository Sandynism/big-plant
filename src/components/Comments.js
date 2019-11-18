import React from 'react';

const Comments = ({ onSubmit, onChange, newComment, flowerInfo: { flowerName, comments } }) => {
  return (
    <div className="comments__form-container">
      <div className="comments__form">
        <div className="comments__form-label">Leave a comment:</div>
        <form onSubmit={onSubmit}>
          <textarea
            className="comments__form-text"
            placeholder={`Ask about the ${flowerName}`}
            value={newComment}
            onChange={onChange}
            rows="3"
            // cols="34"
          />
          <div className="comments__form-btn-wrapper">
            <button className="comments__form-btn">Send</button>
          </div>
        </form>
      </div>

      <div className="comments__comments">
        <div className="comments__comments-label">Comments</div>
        {comments.map((comment, index) => {
          return (
            <div key={index} className="comments__comments-item">
              {comment}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
