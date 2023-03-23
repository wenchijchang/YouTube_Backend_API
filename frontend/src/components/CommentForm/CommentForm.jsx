import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CommentForm = ({ videoId, getComments }) => {
  const [comment, setComment] = useState("");
  const [user, token] = useAuth();
  useNavigate("/");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newComment = {
      video_id: videoId,
      user_id: user.id,
      text: comment,
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments/",
      newComment,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.status === 201) {
      await getComments();
    }
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={{ marginRight: "10px" }}>Comment</label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Comment..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "10px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;

// const CommentForm = (videoId, addComment) => {

//     const [comment, setComment] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();
//         let commentPost = {
//             "video_id": videoId,
//             "text": comment,
//         }

//         addComment(comment);
//         setComment("");
//     }
