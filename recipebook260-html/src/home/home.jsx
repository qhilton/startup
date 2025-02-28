import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') { // Ensure we're in the browser context
            // Load all recipes from localStorage

            const allRecipes = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i); // Get the key (which is the ID)
                if (key != "userName") {
                    const recipe = JSON.parse(localStorage.getItem(key));
                    if (recipe) {
                        allRecipes.push(recipe);
                    }
                }
            }
            setRecipes(allRecipes);
          }
        }, []);

    return (
        <div className="flex flex-1 flex-col">
            <main className="flex bg-secondary">
                <div className="flex flex-col left-item">
                    <h1>
                        Popular Recipes
                    </h1>
                    <div>Chocolate Chip Cookies</div>
                    <div>Chicken Adobo</div>


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
                        <div key={recipe.id}>{recipe.name}</div>
                        ))
                    ) : (
                        <div>No recipes found</div>
                    )}

                </div>

                

                
            </main>
        </div>
    );
}

export default Home;