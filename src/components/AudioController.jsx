import React, { useState, useRef, useEffect } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import "../pages/home/home.css";

const AudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const audioRef = useRef(new Audio(audioSrc));

    const playAudio = () => {
        if (audioRef.current.paused) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(error => console.error('Audio play error:', error));
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const updateProgress = () => {
        if (audioRef.current) {
            const { currentTime, duration } = audioRef.current;
            const progress = (currentTime / duration) * 100;
            setProgress(progress);
            setSliderValue((currentTime / duration) * 100);
        }
    };

    const handleSliderChange = (event, newValue) => {
        if (audioRef.current.duration) {
            const newTime = (newValue / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setSliderValue(newValue);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('timeupdate', updateProgress);
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    return (
        <div className="audio-controls">
            <div className="audio-button-container">
                <button className="audio-button" onClick={playAudio}>
                    {isPlaying ? <PauseIcon style={{ color: "white" }} /> : <PlayArrowIcon style={{ color: "white" }} />}
                </button>
            </div>
            <div className="progress-container">
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: 5 }}
                    className="custom-progress-bar"
                />
                <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    aria-labelledby="continuous-slider"
                    sx={{ color: 'white', height: 8, marginTop: 2 }}
                    className="custom-slider"
                />
            </div>
        </div>
    );
};

AudioPlayer.propTypes = {
    audioSrc: PropTypes.string.isRequired,
};

export default AudioPlayer;
