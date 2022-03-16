const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    instructions: String,
    images: Array
})

module.exports = mongoose.model('Recipe' , recipeSchema);