import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "./localKey";

const VidHomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=sourdough recipe&key=${KEY}&part=snippet&type=video&maxResults=6`
        );
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  });

  return (
    <div>
      {videos && videos.map((video) => <div key={video.id}>{video.title}</div>)}
    </div>
  );
};

export default VidHomePage;
