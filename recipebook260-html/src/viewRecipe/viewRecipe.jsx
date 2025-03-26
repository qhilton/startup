import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './viewRecipe.css';


const ViewRecipe = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    fetch(`/api/viewRecipe/${recipeID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((recipeData) => {
        setRecipeData(recipeData);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [recipeID]);

  




  return (
    <div>
      <main className="flex flex-col bg-secondary">
        {recipeData ? (
          <div>
            <h1>{recipeData.recipeName}</h1>
            <h3>Ingredients:</h3>
            <p>{recipeData.ingredients}</p>
            <h3>Instructions:</h3>
            <p>{recipeData.instructions}</p>
            <Button className="button" variant='primary' onClick={() => navigate('/home')}>
              Home
            </Button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default ViewRecipe;