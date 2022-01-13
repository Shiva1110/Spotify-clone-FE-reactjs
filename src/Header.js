import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className="header-left">
                <img src='https://www.shareicon.net/data/2048x2048/2016/06/21/607432_spotify_4096x4096.png' alt=''/>
                <h3>Spotify</h3>
            </div>
            <div className="header-right">
                <Link to="/">Premiuim</Link>
                <Link to="/">Support</Link>
                <Link to="/">Download</Link>
                <span>|</span>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div> 
        </div>
    )
}

export default Header
