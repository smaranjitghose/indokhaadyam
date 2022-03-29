import React from "react";
import Footer from "../../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/mobilenavbar";
import GlobalStyle from "../../globalStyles";
import './RecipeForm.css';
const RecipeForm = () => {
    const isMobile = useMediaQuery({ maxWidth: "700px" });

    return (
      <>
        <GlobalStyle />
  
        {!isMobile && <Navbar />}
        {isMobile && <MobileNavbar />}
        <div className = "main-div">
            <form className="form">
                <h1 className = 'main-heading'>Add a new recipe using the form below</h1>
                <div className ="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="name" className="form-control" id="name"></input>
                </div>
                <div className ="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea type="instructions" className ="form-control" id="instructions"></textarea>
                </div>
                <div className ="form-group">
                    <label htmlFor="img-link">Image Links: </label>
                    <textarea type="img-link" className ="form-control" id="img-link"></textarea>
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
        <Footer />
      </>
    );
  };
  export default RecipeForm;