import React, { Component } from "react";
import './recipeData.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalStyle from "../../globalStyles";

class RecipeData extends Component {

    state = {
        recipes: []
    }

    onButtonDelete = (id) => {
        fetch('http://127.0.0.1:5000/recipe/' + id, {
            method: 'DELETE',
        })
        window.location.reload()
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/recipe')
            .then(res => res.json())
            .then((data) => {
                this.setState({ recipes: data });
                console.log(data)
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
                            <div key={index} className="recipe-div">
                                <div className="recipe-name">name: {recipe.name}</div>
                                <div className="instructions">instructions: {recipe.instructions}</div>
                                <button className="delete-button" onClick={() => { this.onButtonDelete(recipe._id) }}>Delete</button>
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