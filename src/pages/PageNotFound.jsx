import React from 'react';
import "../styles/error404.css";
import Error404 from "../assets/Error404.png";
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className='wrapper'>
            <img className='error-img' src={Error404} alt="404 Error" />

            <Link to="/">
                <input type="button" value="<- Back to Home" />
            </Link>            

        </div>
    )
}

export default PageNotFound;