import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./VidNavBar.css";

const VidNavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="navBar">
      <ul>
        <li>
          <h1>YouVideos</h1>
        </li>
        <li>
          <SearchBar setSearchTerm={setSearchTerm} />
        </li>
      </ul>
    </div>
  );
};

export default VidNavBar;
