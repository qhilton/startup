import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [popularRecipe, setPopularRecipe] = useState("");

    const popularRecipes = [
        "Chocolate Chip Cookies",
        "Chicken Adobo",
        "Dinner Rolls"
    ];

    useEffect(() => {
        let currentIndex = 0; // Keep track of the current index in the popularRecipes array

        const interval = setInterval(() => {
            setPopularRecipe(popularRecipes[currentIndex]); // Set the popular recipe to display
            currentIndex = (currentIndex + 1) % popularRecipes.length; // Cycle through recipes
        }, 20000); // 20 seconds interval

        // Cleanup interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') { // Ensure we're in the browser context
    //         // Load all recipes from localStorage

    //         const allRecipes = [];
    //         for (let i = 0; i < localStorage.length; i++) {
    //             const key = localStorage.key(i);
    //             if (key != "userName") {
    //                 const recipe = JSON.parse(localStorage.getItem(key));
    //                 if (recipe) {
    //                     allRecipes.push(recipe);
    //                 }
    //             }
    //         }
    //         setRecipes(allRecipes);
    //       }
    //     }, []);

    useEffect(() => {
        fetch('/api/recipes')
          .then((response) => response.json())
          .then((recipes) => {
            setRecipes(recipes);
          });
    }, []);

    console.log("recipes", recipes);

    return (
        <div className="flex flex-1 flex-col">
            <main className="flex bg-secondary">
                <div className="flex flex-col left-item">
                    <h1>
                        Popular Recipes
                    </h1>
                    <div>{popularRecipe || "Loading..."}</div>

                    <div id="nutrition">
                        <div>100 Calories</div>
                    </div>
                </div>
            
                <div className="flex flex-col">
                    <h1>
                        Your Recipes
                    </h1>

                    <div className="d-flex flex-row">
                        <input className="flex left-item" type="text" placeholder="Search"></input>

                        
                        <Button variant='primary' onClick={() => navigate('/createRecipe')}>
                            Create Recipe
                        </Button>
                    </div>
                    {/* <div>Dinner Rolls</div>
                    <div>Mashed Potatoes</div> */}

                    {/* Render recipe names dynamically */}
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <div key={recipe.id}>
                                <Link className="recipe-link" to={`/viewRecipe/${recipe.id}`}>
                                    {recipe.name}
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div>No recipes created</div>
                    )}

                </div>
            </main>
        </div>
    );
}

export default Home;