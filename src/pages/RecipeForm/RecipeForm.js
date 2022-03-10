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
        <div class = "main-div">
            <form action = "/">
                <h1 class = 'main-heading'>Add a new recipe using the form below</h1>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" id="name"></input>
                </div>
                <div class="form-group">
                    <label for="instructions">Instructions:</label>
                    <textarea type="instructions" class="form-control" id="instructions"></textarea>
                </div>
                <div class="form-group">
                    <label for="img-link">Image Links: </label>
                    <textarea type="img-link" class="form-control" id="img-link"></textarea>
                </div>
            </form>
        </div>
        <Footer />
      </>
    );
  };
  export default RecipeForm;