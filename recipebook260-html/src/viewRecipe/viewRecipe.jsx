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
  const { recipeID } = useParams(); // Get object ID from URL params
  const [recipeData, setRecipeData] = useState(null);

  console.log("id", recipeID);
  console.log("recipeData", recipeData);

  useEffect(() => {
    const storedRecipe = localStorage.getItem(recipeID);
    console.log("local", localStorage.getItem(recipeID));
    if (storedRecipe) {
      setRecipeData(JSON.parse(storedRecipe));
    } else {
      setRecipeData('Recipe not found');
    }
  }, [recipeID]);

  return (
    <div>
      <main className="flex flex-col bg-secondary">
        {/* <h1>View Recipe</h1> */}
        {recipeData ? (
          <div>
            <h1>{recipeData.name}</h1>
            <h3>Ingredients:</h3>
            <p>{recipeData.ingredients}</p>
            <h3>Instructions:</h3>
            <p>{recipeData.instructions}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default ViewRecipe;