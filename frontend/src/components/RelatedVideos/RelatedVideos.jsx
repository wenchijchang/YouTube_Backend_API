import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoList from "../VideoList/VideoList";

const RelatedVideos = ({ videoId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  const getRelatedVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&key=${KEY}&part=snippet`
      );
      // debugger;
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="related-video-container">
      {videos && <VideoList videos={videos} />}
    </div>
  );
};

export default RelatedVideos;
