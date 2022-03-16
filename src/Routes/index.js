const recipeController = require("../controllers/recipeController")

const routes = [
    {
        method: 'GET',
        url: '/recipe',
        handler: recipeController.getRecipe
    },
    {
        method: 'GET',
        url: '/recipe/:id',
        handler: recipeController.getSingleRecipe
    },
    {
        method: 'POST',
        url: '/recipe',
        handler: recipeController.addRecipe
    },
    {
        method: 'PUT',
        url: '/recipe/:id',
        handler: recipeController.updateRecipe
    },
    {
        method: 'DELETE',
        url: '/recipe/:id',
        handler: recipeController.deleteRecipe
    },
    
]

module.exports = routes