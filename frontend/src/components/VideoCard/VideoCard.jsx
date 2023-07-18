import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const navigate = useNavigate();
  const handleClick = (video) => {
    navigate("/video", {
      state: {
        id: videoId,
        title: snippet.title,
        description: snippet.description,
      },
    });
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <h3 className="video-title"> {snippet.title} </h3>
    </div>
  );
};

export default VideoCard;

// Link not working
