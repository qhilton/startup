import React, { useState } from 'react';
// import Recipe from '../Recipe';
import { useNavigate } from 'react-router-dom';
import './createRecipe.css';


const CreateRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    // Generate a unique ID for the object (e.g., using timestamp)
    const newRecipeId = Date.now();
    
    // Create the object to store
    const newRecipe = {
      id: newRecipeId,
      name: name,
      ingredients: ingredients,
      instructions: instructions
    };

    // Store the object in localStorage
    localStorage.setItem(newRecipeId.toString(), JSON.stringify(newRecipe));

    // Redirect to viewObject page with the new object's ID
    navigate(`/viewRecipe/${newRecipeId.toString()}`);
  };

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

        <button onClick={handleSave}>Save</button>
      </main>
    
  );
};

export default CreateRecipe;