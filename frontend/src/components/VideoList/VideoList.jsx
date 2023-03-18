import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.css";

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((element) => (
        <VideoCard video={element} />
      ))}
    </div>
  );
};

export default VideoList;
