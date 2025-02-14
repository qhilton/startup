import React from 'react';
import './viewRecipe.css';

export function ViewRecipe() {
  return (
    <main className="flex flex-col bg-secondary">
      <h1
        id="name" aria-placeholder="Name">Recipe Name
      </h1>
      <h3>Ingredients</h3>
      <p id="ingredients"></p>
      <h3>Instructions</h3>
      <p id="instructions"></p>
    </main>
  );
}