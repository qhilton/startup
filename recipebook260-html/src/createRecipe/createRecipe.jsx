import React from 'react';
import './createRecipe.css';

export function CreateRecipe() {
  return (
    <main className="flex flex-col bg-secondary">
        <h1>
            Create Recipe
        </h1>
        <div className="flex flex-col">
            <div className="flex">
              <input type="text" placeholder="name"/>
              <form>
                  <label for="ingredients">Ingredients:</label><br></br>
                  <textarea id="ingredients" name="ingredients" rows="4" cols="50"></textarea>
              </form>
            </div>
            <div className="flex">
              <form>
                  <label for="instructions">Instructions:</label><br></br>
                  <textarea id="instructions" name="instructions" rows="8" cols="50"></textarea>
              </form>
            </div>
        </div>
        <form method="get" action="viewRecipe.html">
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    </main>
  );
}