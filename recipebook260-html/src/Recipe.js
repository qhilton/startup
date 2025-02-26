import React, { useState, useEffect } from 'react';
import { CreateRecipe } from './createRecipe/createRecipe';

const Recipe = () => {
    const initialName = localStorage.getItem('name') || 'chocolate chip cookies';
    const initialIngredients = localStorage.getItem('ingredients') || ['flour', 'sugar', 'butter', 'chocolate chips'];
    const initialInstructions = localStorage.getItem('instructions') || ['Mix the butter and sugar', 'Add the flour', 'Add the chocolate chips', 'Bake for 10 minutes at 375'];

    const [name, setName] = useState(initialName);
    const [ingredients, setIngredients] = useState(initialIngredients);
    const [instructions, setInstructions] = useState(initialInstructions);

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('ingredients', ingredients);
        localStorage.setItem('instructions', instructions);
      }, [name, ingredients, instructions]);

  return (
    // <div>
    //   <h1>Person Info</h1>
    //   <p>Name: {person.name}</p>
    //   <p>Age: {person.age}</p>
    //   <p>Job: {person.job}</p>
    // </div>

    <CreateRecipe
        name={name}
        setName={setName}
        ingredients={ingredients}
        setIngredients={setIngredients}
        instructions={instructions}
        setInstructions={setInstructions}
    />
  );
};

export default Recipe;