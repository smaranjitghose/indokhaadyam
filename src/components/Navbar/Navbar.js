import React from 'react';
import "../../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav class = "Navbar">
                <ul class = "List">
                    <li class = "List-item"><a className='Link' href = "/">Home</a></li>
                    <li class = "List-item"><a className='Link' href = "# ">Categories</a></li>
                    <li class = "List-item"><a className='Link' href = "Contact">Contact</a></li>
                    <li class = "List-item"><a className='Link' href = "# ">Blog</a></li>
                    <li class = "List-item"><a className='Link' href = "Team">Team</a></li>
                </ul>
        </nav>
    )
}

export default Navbar;
