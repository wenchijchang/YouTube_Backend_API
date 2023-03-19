import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoList from "../../components/VideoList/VideoList";

const DisplaySearchPage = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  const fetchVideos = async () => {
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
  }, [searchTerm]);

  return (
    <div>
      <VideoList videos={videos} />
      {/* {videos && videos.map((video) => <div key={video.id}>{video.title}</div>)} */}
    </div>
  );
};

export default DisplaySearchPage;
