import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './home.css';

export function Home() {
    const navigate = useNavigate();

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

                        {/* <form className="flex" method="get" action="createRecipe.html">
                            <button type="submit" className="btn btn-primary">Create New Recipe</button>
                        </form> */}
                        {/* <li className="nav-item">
                            <NavLink className='nav-link' to='createRecipe'>Home</NavLink>
                        </li> */}
                        <Button variant='primary' onClick={() => navigate('/createRecipe')}>
                            Create Recipe
                        </Button>
                    </div>
                    <div>Dinner Rolls</div>
                    <div>Mashed Potatoes</div>
                </div>

                

                
            </main>
        </div>
    );
}