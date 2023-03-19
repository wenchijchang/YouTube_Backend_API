import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let comment = {
      video_id: comment.videoId,
      text: comment,
    };

    comment.addComment(comment);
    setComment("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="comment-form"
          placeholder="Comment..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
