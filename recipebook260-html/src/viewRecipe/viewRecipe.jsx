import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './viewRecipe.css';

// export function ViewRecipe() {
//   return (
//     <main className="flex flex-col bg-secondary">
//       <h1
//         id="name" aria-placeholder="Name">Recipe Name
//       </h1>
//       <h3>Ingredients</h3>
//       <p id="ingredients"></p>
//       <h3>Instructions</h3>
//       <p id="instructions"></p>
//     </main>
//   );
// }

const ViewRecipe = () => {
  const { id } = useParams(); // Get object ID from URL params
  const [recipeData, setRecipeData] = useState(null);

  console.log("id", id);
  console.log("recipeData", recipeData);

  useEffect(() => {
    const storedRecipe = localStorage.getItem(id);
    console.log("local", localStorage.getItem(id));
    if (storedRecipe) {
      setRecipeData(JSON.parse(storedRecipe));
    } else {
      setRecipeData('Recipe not found');
    }
  }, [id]);

  return (
    <div>
      <h1>View Recipe</h1>
      {recipeData ? (
        <div>
          <h2>{recipeData.name}</h2>
          <h3>Ingredients:</h3>
          <p>{recipeData.ingredients}</p>
          <h3>Instructions:</h3>
          <p>{recipeData.instructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewRecipe;