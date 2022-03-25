import React, { Component } from "react";
import './recipeData.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalStyle from "../../globalStyles";

class RecipeData extends Component {

    state = {
        recipes : []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/recipe')
        .then(res => res.json())
        .then((data) => {
          this.setState({ recipes : data });
        })
        .catch(console.log)
      }
    render() {
        return (
            <>
                <GlobalStyle />
                <Navbar />
                <div className="recipe-data-div">
                    {
                        this.state.recipes.map((recipe, index) => (
                            <div key = {index} className="recipe-div">
                                <div>name: {recipe.name}</div>
                                <div>instructions: {recipe.instructions}</div>
                            </div>
                        ))
                    }
                </div>
                <Footer />
            </>
        )
    }
}

export default RecipeData;