import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="video-card">
      <Link to={`/video/${videoId}`}>
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <h3 className="video-title"> {snippet.title} </h3>
      </Link>
    </div>
  );
};

export default VideoCard;

// Link not working
