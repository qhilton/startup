import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [popularRecipe, setPopularRecipe] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonStat, setPokemonStat] = useState("");

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
        fetch('/api/recipes')
          .then((response) => response.json())
          .then((recipes) => {
            setRecipes(recipes);
          });
    }, []);

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
                        <input className="flex left-item" type="text" placeholder="Search"></input>

                        
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