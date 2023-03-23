import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoList from "../../components/VideoList/VideoList";

const VidHomePage = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (searchTerm = "sourdough recipe") => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=6`
      );
      console.log("API Response: ", response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <VideoList videos={videos} />
    </div>
  );
};

export default VidHomePage;
