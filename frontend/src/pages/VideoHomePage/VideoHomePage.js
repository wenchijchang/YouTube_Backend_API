import React, { useState, useEffect } from "react";

import axios from "axios";
import { KEY } from "./localKey";

const [videos, setVideos] = useState([]);

useEffect(() => {
  fetchVideos();
}, []);

const fetchVideos = async () => {
  try {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=sourdough recipe&key=${KEY}&part=snippet&type=video&maxResults=5`
    );
    setVideos(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
