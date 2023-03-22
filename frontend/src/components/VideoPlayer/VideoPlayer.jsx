import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../CommentList/CommentList";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const VideoPlayer = () => {
  const { id } = useParams();
  const [videoId, setVideoId] = useState(id);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/by_vid_id?video_id=${videoId}`
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
  }, [id]);
  // pass in id in [] ?

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div className="container">
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <CommentForm videoId={id} getComments={getComments} />
        </div>
        <div>
          <ul>
            <li>
              <CommentList comments={comments} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <RelatedVideos videoId={id} />
      </div>
    </div>
  );
};
export default VideoPlayer;
