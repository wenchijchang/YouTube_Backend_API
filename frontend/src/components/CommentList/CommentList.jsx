import React from "react";
import SingleComment from "../SingleComment/SingleComment";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <SingleComment comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
