import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { ViewRecipe } from './viewRecipe/viewRecipe';
import { CreateRecipe } from './createRecipe/createRecipe';

export default function App() {
  return (
    <BrowserRouter>
        <div>
            <header className="container-fluid">
                <nav className="navbar fixed-top">
                    <div className="" href="#">Recipe Book</div>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to=''>Login</NavLink>
                        </li>
                        <span>|</span>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='home'>Home</NavLink>
                        </li>
                        <span>|</span>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='viewRecipe'>View Recipe</NavLink>
                        </li>
                        <span>|</span>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='createRecipe'>Create Recipe</NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/home' element={<Home />} />
                <Route path='/viewRecipe' element={<ViewRecipe />} />
                <Route path='/createRecipe' element={<CreateRecipe />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <div className="container-fluid">
                    <span className="text-reset">Quintin Hilton</span>
                    <a className="text-reset" href="https://github.com/qhilton/startup">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}