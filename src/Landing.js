import React from 'react';
import Header from './Header';
import './Landing.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Landing() {
    return (
        <div className='landing'>
            <Header/>
            <div className='backgroundone'>
                <div className="contentOne">
                    <p className='hash'>#spotifywrapped</p>
                    <h1>2021 Wrapped is ready.</h1>
                    <h3>But it's only available in the Spotify app. Download it now to discover more.</h3>
                    <div className="buttons">
                        <button>
                            <img src="/appstore.jpg" alt="" />
                        </button>
                        <button>
                            <img src="/googleplay.png" alt="" />
                        </button>
                    </div>
                    <a href="/">Listen to 2021 highlights here.</a>
                </div>
                <img src="/illus1.png" alt="" />
            </div>
            <div className='backgroundtwo'>
                <div className="contentTwo">
                    <p className='hash'>spotify free</p>
                    <h1>Listening is everything</h1>
                    <h3>Millions of songs and podcasts. No credit card needed.</h3>
                    <button>GET SPOTIFY FREE</button>
                </div>
                <img src="/illus3.png" alt="" />
            </div>
            <div className='footer'>
                <div className='backgroundthree'>
                    <div className="footer-logo">
                        <img src='https://www.shareicon.net/data/2048x2048/2016/06/21/607432_spotify_4096x4096.png' alt=''/>
                        <h3>Spotify</h3>
                    </div>
                    <div className="links">
                        <div className="company">
                            <span>Company</span>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>For the Record</li>
                        </div>
                        <div className="communities">
                            <span>Communities</span>
                            <li>For Artists</li>
                            <li>Developers</li>
                            <li>Advertising</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                        </div>
                        <div className="useful">
                            <span>Useful Links</span>
                            <li>Support</li>
                            <li>Web Player</li>
                            <li>Free Mobile App</li>
                        </div>
                    </div>
                    <div className="social-links">
                        <button>
                            <InstagramIcon fontSize='large'/>
                        </button>
                        <button>
                            <TwitterIcon fontSize='large'/>
                        </button>
                        <button>
                            <FacebookIcon fontSize='large'/>
                        </button>
                    </div>
                </div>
                <div className="footer-last">
                    <div className="location">
                        <span>India (English)</span>
                    </div>
                    <div className="last-line">
                        <div className="about">
                            <span>Legal</span>
                            <span>Privacy Center</span>
                            <span>Privacy Policy</span>
                            <span>Cookies</span>
                            <span>About Ads</span>
                        </div>
                        <span className="copyright">&#169; 2022 Spotify AB</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
