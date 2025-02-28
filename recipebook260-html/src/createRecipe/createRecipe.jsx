import React, { useState } from 'react';
// import Recipe from '../Recipe';
import { useNavigate } from 'react-router-dom';
import './createRecipe.css';

// export function CreateRecipe({ name, setName, ingredients, setIngredients, instructions, setInstructions }) {
//   return (
//     <main className="flex flex-col bg-secondary">
//         <h1>
//             Create Recipe
//         </h1>
//         <div className="flex flex-col">
//             <div className="flex">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//             />
//               <form>
//                   <label for="ingredients">Ingredients:</label><br></br>
//                   <textarea
//                     type="text"
//                     value={ingredients}
//                     onChange={(e) => setIngredients(e.target.value)}
//                     placeholder="Enter ingredients"
//                     rows="4"
//                     cols="50">  
//                   </textarea>
//               </form>
//             </div>
//             <div className="flex">
//               <form>
//                   <label for="instructions">Instructions:</label><br></br>
//                   <textarea
//                     type="text"
//                     value={instructions}
//                     onChange={(e) => setInstructions(e.target.value)}
//                     placeholder="Enter instructions"
//                     rows="8"
//                     cols="50">  
//                   </textarea>
//               </form>
//             </div>
//         </div>
//         <form method="get" action="viewRecipe.html">
//             <button type="submit" className="btn btn-primary">Save</button>
//         </form>
//     </main>
//   );
// }

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
    <div>
      <h1>Create Recipe</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name"
        />
      </div>

      <div>
        <label>Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients"
        />
      </div>

      <div>
        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Enter instructions"
        />
      </div>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreateRecipe;