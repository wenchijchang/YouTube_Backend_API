import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./VidNavBar.css";

const VidNavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="navbar">
      <h1>YouVideos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default VidNavBar;
