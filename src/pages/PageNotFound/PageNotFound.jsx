import React from 'react';
import "./error404.css";
import Error404 from "../../assets/images/error/Error404.gif";
import Cheese from "../../assets/images/error/Cheese.png";
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className='wrapper'>
            <img className='error-img' src={Error404} alt="404 Error" />
            <img className='error-cheese' src={Cheese} alt="404 Cheese" />

            <Link to="/">
                <input type="button" value="<- Back to Home" />
            </Link>            

        </div>
    )
}

export default PageNotFound;