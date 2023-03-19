import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h3 className="video-title"> {video.snippet.title} </h3>
    </div>
  );
};

export default VideoCard;
