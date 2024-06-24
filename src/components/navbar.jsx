import React from 'react';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="more-icon-box">
                <FontAwesomeIcon icon={faEllipsisVertical} className="whiteicon" />
            </div>
            <Link id="nav-link" style={{ fontWeight: 900 }} to="/"> TopTune. </Link>
            <a href="#" id="nav-link">Artists</a>
            <a href="#" id="nav-link">Albums</a>
        </div>
    );
};

export default Navbar;
