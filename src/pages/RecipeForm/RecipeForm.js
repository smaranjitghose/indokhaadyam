import { React, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/mobilenavbar";
import GlobalStyle from "../../globalStyles";
import './RecipeForm.css';
const RecipeForm = () => {
    const isMobile = useMediaQuery({ maxWidth: "700px" });
    const [name, setName] = useState("");
    const [instructions, setInstructions] = useState("");

    async function AddRecipe() {
        //To make sure that recipe is added only when both name and instructions have some value
        if (name.length > 0 && instructions.length > 0) {
            const response = await fetch('http://127.0.0.1:5000/recipe', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, instructions: instructions })
            });
            const content = await response.json();

            this.state.recipes.push(content)
            setName('');
            setInstructions('');
        }
    };

    return (
        <>
            <GlobalStyle />

            {!isMobile && <Navbar />}
            {isMobile && <MobileNavbar />}
            <div className="main-div">
                <form className="form">
                    <h1 className='main-heading'>Add a new recipe using the form below</h1>
                    <div className="form-group">
                        <label
                            htmlFor="name">Name:</label>
                        <input
                            type="name"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="instructions">Instructions:</label>
                        <textarea
                            type="instructions"
                            className="form-control"
                            id="instructions" value={instructions}
                            onChange={(e) => { setInstructions(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img-link">Image Links: </label>
                        <textarea
                            type="img-link"
                            className="form-control"
                            id="img-link"
                        >
                        </textarea>
                    </div>
                    <button className="submit-button" type="submit" onClick={AddRecipe}>Submit</button>
                    <a className="details-button" href="recipedata">Tap to view data</a>
                </form>
            </div>
            <Footer />
        </>
    );
};
export default RecipeForm;