import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

function Header() {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleClick = () => {
        setMenuClicked(!menuClicked);
    }

    useEffect(() => {
        if(menuClicked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [menuClicked])

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
            {!menuClicked && <div onClick={toggleClick} className="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>}
            {menuClicked && 
                <div className="sidebar">
                    <button onClick={toggleClick}>
                        <CloseIcon fontSize="large"/>
                    </button>
                    <div className="side-nav-links">
                        <div className="main-links">
                            <Link to="/">Premiuim</Link>
                            <Link to="/">Support</Link>
                            <Link to="/">Download</Link>
                        </div>
                        <span></span>
                        <div className="useful-links">
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/login">Log In</Link>
                        </div>
                    </div>
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White-768x230.png" alt="" />
                </div>
            }
        </div>
    )
}

export default Header
