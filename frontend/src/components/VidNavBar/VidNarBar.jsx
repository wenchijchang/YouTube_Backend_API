import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import "./VidNavBar.css";

const VidNavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1>YouVideos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div>
        {user ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default VidNavBar;
