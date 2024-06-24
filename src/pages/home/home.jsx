// import React, { useState, useRef, useEffect } from "react";
import React from "react";
import "./home.css";
import weeknd from "../../pics/weeknd.png";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import LinearProgress from '@mui/material/LinearProgress';
import audioFile from '../../pics/The Weeknd - Starboy (Lyrics) ft. Daft Punk.mp3';
import AudioController from "../../components/AudioController";

const Home = () => {
    return (
        <div className="home-container">
            <img
                src={weeknd}
                alt="The Weeknd Starboy"
                className="background-image"
            />
            <h3 className="theweeknd">THE WEEKND</h3>
            <h1 className="starboy">Starboy</h1>
            <p className="text-content">
                The one and only returns this fall with<br />a journey into the soul.
            </p>
            <AudioController audioSrc={audioFile} />
        </div>
    );
};

export default Home;
