import React, { useState, useEffect } from "react";
import VideoList from "../VideoList/VideoList";
import CommentList from "../CommentList/CommentList";
import axios from "axios";

const VideoPlayer = () => {
  const [videoID, setVideoId] = useState("2FVfJTGpXnU");
  const [comments, setComments] = useState([]);

  async function getComments(video) {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/all/${video.id.videoId}/`
    );
    setComments(response.data);
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
      <div>{/* COMMENT FORM */}</div>
      <div>
        <ul>
          <li>
            <CommentList comments={comments} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;

// comment.text
