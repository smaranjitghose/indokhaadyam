import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className='Box'>
            <div className='Box1'>
                IndoKhaadyam
            </div>
            <div style = {{width: "100%" , backgroundColor: "var(--footer-color1)" }}>
                <div className='Triangle'></div>
            </div>
            <div className='Box2'>
                Made with 💖 in India for the world
            </div>
        </div>
    )
}

export default Footer;