import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { notifier } from './notifier';
import './createRecipe.css';


const CreateRecipe = () => {
  const userName = localStorage.getItem('userName');
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  async function saveRecipe() {
    const newRecipeId = Date.now().toString();
    const newRecipe = {
      id: newRecipeId,
      userName: userName,
      recipeName: name,
      ingredients: ingredients,
      instructions: instructions
    };

    console.log(newRecipe);

    const response = await fetch('/api/createRecipe', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRecipe),
      credentials: 'include',
    });

    if (response.ok) {
      //console.log('Recipe saved successfully');
      const message = `${userName} added a new recipe for ${name}`;
      notifier.broadcastEvent('Recipebook', 'newRecipeCreated', {
        message: message,
        userName: userName,
        recipeName: name,
        recipeId: newRecipeId,
      });
      navigate(`/viewRecipe/${newRecipeId}`);
    } else {
      console.error('Failed to save recipe:', response.status, response.statusText);
    }

    
  }



  return (
    
      <main className="flex flex-col bg-secondary">
        <h1>Create Recipe</h1>

        <div className="flex flex-col">
          <div className="flex">
            <label>Name:</label><br></br>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the name"
            />

            <form>
              <label>Ingredients:</label><br></br>
              <textarea
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients"
                rows="4"
                cols="50"
              />
            </form>
          </div>

          <div className="flex">
            <label>Instructions:</label><br></br>
            <textarea
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter instructions"
              rows="8"
              cols="50"
            />
          </div>
        </div>

        <Button variant='primary' onClick={saveRecipe}>Save</Button>
      </main>
    
  );
};

export default CreateRecipe;