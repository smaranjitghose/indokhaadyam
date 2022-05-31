import React , {useState} from 'react';

const Recipe = ({recipe}) => {

    const [editMode, setEditMode] = useState(false);

    const onButtonDelete = async (id) => {
        const response = await fetch('http://127.0.0.1:5000/recipe/' + id, {
            method: 'DELETE',
        })
        console.log(response)
        window.location.reload()
    }

    const UpdateRecipe = async (id, name, instructions) => {
        const response = await fetch('http://127.0.0.1:5000/recipe/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "name": name,
                    "instructions": instructions
                }
            )
        });
        console.log(response)
        window.location.reload();
    }

    return(
        editMode ?<div className='recipe-div'>
            <label htmlFor="recipeName">name: </label>
            <input id="recipeName" className="recipe-name" defaultValue={recipe.name} onChange={(e) => { recipe.name = e.target.value }} />
            <label htmlFor="Instructions">instructions: </label>
            <input id="Instructions" className="insructions" defaultValue={recipe.instructions} onChange={(e) => { recipe.instructions = e.target.value }} />
            <button className="update-button" onClick={() => { UpdateRecipe(recipe._id, recipe.name, recipe.instructions) }}>Submit</button>
        </div> :
        <div className='recipe-div'>
            <div className="recipe-name">name: {recipe.name}</div>
            <div className="instructions">instructions: {recipe.instructions}</div>
            <button className="delete-button" onClick={() => { onButtonDelete(recipe._id) }}>Delete</button>
            <button className="update-button" onClick={() => {setEditMode(true)}}>Update</button>
        </div>
    )
}

export default Recipe;