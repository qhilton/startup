import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './createRecipe.css';


const CreateRecipe = (props) => {
  const userName = props.userName;
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    const newRecipeId = Date.now();
    
    const newRecipe = {
      id: newRecipeId,
      name: name,
      ingredients: ingredients,
      instructions: instructions
    };

    localStorage.setItem(newRecipeId.toString(), JSON.stringify(newRecipe));

    navigate(`/viewRecipe/${newRecipeId.toString()}`);
  };

  async function saveRecipe() {
    const newRecipeId = Date.now();
    const newRecipe = {
      id: newRecipeId,
      userName: userName,
      recipeName: name,
      ingredients: ingredients,
      instructions: instructions
    };

    await fetch('/api/recipe', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRecipe),
    });

    //GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    navigate(`/viewRecipe/${newRecipeId.toString()}`);
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