import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <li>
      <div className="container">
        <div>
          {"Username: " + comment.user.username + " "}
          {"Comment: " + comment.text}
        </div>
      </div>
    </li>
  );
};

export default SingleComment;
