import React, { useState, useEffect } from "react";
import VideoList from "../VideoList/VideoList";
import CommentList from "../CommentList/CommentList";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";

const VideoPlayer = () => {
  const [videoID, setVideoId] = useState("2FVfJTGpXnU");
  const [comments, setComments] = useState([]);

  async function getComments(video) {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/all/${video.id.videoId}/`
    );
    setComments(response.data.comment.text);
  }

  return (
    <div>
      <div className="container">
        {/* <VideoList videos={[]} /> */}
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
      <div>
        <CommentForm />
      </div>
      <div>
        <ul>
          <li>
            <CommentList key={comments.id} comments={comments.text} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;

// comment.text
