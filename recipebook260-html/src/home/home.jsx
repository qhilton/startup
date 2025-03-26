import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    const [recipes, setRecipes] = useState([]);
    const [popularRecipe, setPopularRecipe] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonStat, setPokemonStat] = useState("");
    const [recipeName, setRecipeName] = useState("");

    const popularRecipes = [
        "Chocolate Chip Cookies",
        "Chicken Adobo",
        "Dinner Rolls"
    ];

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            setPopularRecipe(popularRecipes[currentIndex]);
            currentIndex = (currentIndex + 1) % popularRecipes.length;
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then((response) => response.json())
        .then((data) => {
            setPokemonName(data.name);
            setPokemonStat(data.stats[1].base_stat);
        })
        .catch();
    }, []);

    useEffect(() => {
        fetch(`/api/recipes/${userName}`)
          .then((response) => response.json())
          .then((recipes) => {
            setRecipes(recipes);
          });
    }, []);


    const handleSearch = async () => {
        if (recipeName) {
          try {
            console.log("recipeName", recipeName);
            const response = await fetch(`/api/searchRecipe/${recipeName}`);
            console.log("after response", response);
            const recipe = await response.json();
            if (recipe) {
              navigate(`/viewRecipe/${recipe.id}`);
            } else {
              alert("Recipe not found");
            }
          } catch (error) {
            console.error("Error searching recipe:", error);
          }
        }
      };


    return (
        <div className="flex flex-1 flex-col">
            <main className="flex bg-secondary">
                <div className="flex flex-col left-item">
                    <h1>
                        Popular Recipes
                    </h1>
                    <div>{popularRecipe}</div>

                    <div>
                        {pokemonName} has a base attack stat of {pokemonStat}
                    </div>
                </div>
            
                <div className="flex flex-col">
                    <h1>
                        Your Recipes
                    </h1>

                    <div className="d-flex flex-row">
                        {/* <input className="flex left-item" type="text" placeholder="Search"></input> */}
                        <input
                        className="flex left-item"
                        type="text"
                        placeholder="Search by recipe name"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)} // Update the search term as the user types
                        />
                        <Button variant="primary" onClick={handleSearch}>Search</Button>
                        
                        <Button variant='primary' onClick={() => navigate('/createRecipe')}>
                            Create Recipe
                        </Button>
                    </div>

                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <div key={recipe.id}>
                                <Link className="recipe-link" to={`/viewRecipe/${recipe.id}`}>
                                    {recipe.recipeName}
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