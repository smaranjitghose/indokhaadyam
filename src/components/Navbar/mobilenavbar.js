import React, { useState } from 'react';
import { MenuToggle } from './menuToggle';
import './mobilenavbar.css'

const MobileNavbar = () => {

    const[isOpen, setOpen] = useState(false);

    return (
        <div className='list-container'>
                {isOpen && <div className='list'>
                    <div className='listItem'><a className='link' href = "/">Home</a></div>
                    <div className='listItem'><a className='link' href = "/">Categories</a></div>
                    <div className='listItem'><a className='link' href = "Contact">Contact</a></div>
                    <div className='listItem'><a className='link' href = "/">Blog</a></div>
                    <div className='listItem'><a className='link' href = "Team">Team</a></div>
                    <div className='ListItem'><a className='Link' href = "/recipeform">Recipe-Form</a></div>
                </div>}
                
                <MenuToggle isOpen = {isOpen} toggle = {() => setOpen(!isOpen)}/>
        </div>
    )
}

export default MobileNavbar;
