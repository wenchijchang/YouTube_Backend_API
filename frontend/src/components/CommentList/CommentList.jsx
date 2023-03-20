import React from "react";
import CommentForm from "../CommentForm/CommentForm";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((element) => (
        <CommentForm comment={element} />
      ))}
    </div>
  );
};

export default CommentList;
