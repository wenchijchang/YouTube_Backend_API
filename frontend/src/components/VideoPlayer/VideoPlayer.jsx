import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../CommentList/CommentList";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

import { useLocation } from "react-router-dom";

const VideoPlayer = () => {
  // const [videoId, setVideoId] = useState(id);
  const [comments, setComments] = useState([]);

  const { state } = useLocation();

  const getComments = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/by_vid_id?video_id=${state.id}`
      );
      console.log(response);
      // video_id=${videoId} or v=${id} ?
      // debugger;
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, [state.id]);
  // pass in id in [] ?

  return (
    <div style={{ display: "flex", margin: "50px 50px 0 50px" }}>
      <div>
        <div className="container">
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${state.id}?autoplay=1&origin=http://example.com`}
            frameborder="0"
          ></iframe>
          <h5>{state.title}</h5>
          <h5>{state.description}</h5>
        </div>
        <div style={{ marginTop: "20px" }}>
          <CommentForm videoId={state.id} getComments={getComments} />
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <CommentList comments={comments} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <RelatedVideos videoId={state.id} />
      </div>
    </div>
  );
};
export default VideoPlayer;
