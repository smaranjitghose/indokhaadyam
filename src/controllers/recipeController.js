const Recipe = require("../Models/Recipe")


    //get all recipes
    getRecipe = async(req, reply) => {
    try{
        const recipes = await Recipe.find()
        return recipes
    }
    catch{
        throw error
    }
    }

    //add a new recipe
    addRecipe = async (req, reply) =>{
    try{
        const recipe = new Recipe(req.body)
        return recipe.save()
    }
    catch{
        throw error
    }
    }


    //get a single recipe
    getSingleRecipe = async (req , reply) => {
    try{
        const recipeId = req.params.id
        const recipe = await Recipe.findById(recipeId)
        return recipe
    }
    catch(error){
        throw error
    }
    }

    // update an existing recipe
    updateRecipe = async(req, reply) => {
    try{
        const recipeId = req.params.id
        const recipe = req.body
        const {...updatedRecipe} = recipe
        const update = await Recipe.findByIdAndUpdate(recipeId, updatedRecipe, {new: true})
        return update

    }
    catch(error){
        throw error
    }
    }

    //delete a recipe
    deleteRecipe = async(req, reply) => {
    try{
        const recipeId = req.params.id
        const recipe = Recipe.findByIdAndDelete(recipeId)
        return recipe

    }
    catch (error){
        throw error
    }
    }

module.exports = {getRecipe, addRecipe, getSingleRecipe, updateRecipe, deleteRecipe}
