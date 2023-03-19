// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import VidHomePage from "./pages/VidHomePage/VidHomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DisplaySearchPage from "./pages/DisplaySearchPage/DisplaySearchPage";

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import VidNavBar from "./components/VidNavBar/VidNarBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <VidNavBar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        /> */}
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route exact path="/" element={<VidHomePage />} />
        <Route path="/search/:searchTerm" element={<DisplaySearchPage />} />
        {/* <Route path="/video/:id" element={<VideoPlayer />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
