import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='List-container'>
                <div className='List'>
                    <div className='ListItem'><a className='Link' href = "/">Home</a></div>
                    <div className='ListItem'><a className='Link' href = "/">Categories</a></div>
                    <div className='ListItem'><a className='Link' href = "Contact">Contact</a></div>
                    <div className='ListItem'><a className='Link' href = "/">Blog</a></div>
                    <div className='ListItem'><a className='Link' href = "Team">Team</a></div>
                    <div className='ListItem'><a className='Link' href = "/recipedata">Recipe-data</a></div>
                </div>
        </div>
    )
}

export default Navbar;
