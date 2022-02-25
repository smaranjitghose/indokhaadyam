import React, { useState } from 'react';
import { MenuToggle } from './menuToggle';
import "../../styles/mobilenav.css";

const MobileNavbar = () => {

    const[isOpen, setOpen] = useState(false);

    return (
        <nav className='navbar'>
                {isOpen && <ul className='list'>
                    <li className='list-item'><a class = "link" href = "/">Home</a></li>
                    <li className='list-item'><a class = "link" href = "# ">Categories</a></li>
                    <li className='list-item'><a class = "link" href = "Contact">Contact</a></li>
                    <li className='list-item'><a class = "link" href = "# ">Blog</a></li>
                    <li className='list-item'><a class = "link" href = "Team">Team</a></li>
                </ul>}
                
                <MenuToggle isOpen = {isOpen} toggle = {() => setOpen(!isOpen)}/>
        </nav>
    )
}

export default MobileNavbar;
