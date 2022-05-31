import React, { Component } from "react";
import './recipeData.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalStyle from "../../globalStyles";
import Recipe from "./recipe";

class RecipeData extends Component {

    state = {
        recipes: [],
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/recipe')
            .then(res => res.json())
            .then((data) => {
                this.setState({ recipes: data });
            })
            .catch(console.log)
    }


    render() {
        return (
            <>
                <GlobalStyle />
                <Navbar />
                <div className="recipe-data-div">
                    <h1 className="recipe-data-heading">Recipe Data</h1>
                    {
                        this.state.recipes.map((recipe, index) => (
                            <Recipe recipe={recipe} key={index} />
                        ))
                    }
                </div>
                <Footer />
            </>
        )
    }
}

export default RecipeData;