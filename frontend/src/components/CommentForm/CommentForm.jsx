import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      comment: comment,
    };

    comment.addNewComment(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Comment</label>
        <input
          type="text"
          className="form-control"
          placeholder="Comment..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
