import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './viewRecipe.css';


const ViewRecipe = () => {
  const { recipeID } = useParams();
  const [recipeData, setRecipeData] = useState(null);

  console.log("id", recipeID);
  console.log("recipeData", recipeData);

  // useEffect(() => {
  //   const storedRecipe = localStorage.getItem(recipeID);
  //   console.log("local", localStorage.getItem(recipeID));
  //   if (storedRecipe) {
  //     setRecipeData(JSON.parse(storedRecipe));
  //   } else {
  //     setRecipeData('Recipe not found');
  //   }
  // }, [recipeID]);

  React.useEffect(() => {
      fetch('/api/recipe')
        .then((response) => response.json())
        .then((recipeData) => {
          setRecipeData(recipeData);
        });
    }, []);




  return (
    <div>
      <main className="flex flex-col bg-secondary">
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