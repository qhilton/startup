import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <header className="container-fluid">
            
            <nav className="navbar fixed-top">
                <a className="navbar-brand" href="#">Recipe Book</a>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Login</a>
                    </li>
                    <span>|</span>
                    <li className="nav-item">
                        <a className="nav-link" href="home.html">Home</a>
                    </li>
                    <span>|</span>
                    <li className="nav-item">
                        <a className="nav-link" href="viewRecipe.html">View Recipe</a>
                    </li>
                    <span>|</span>
                    <li className="nav-item">
                        <a className="nav-link" href="createRecipe.html">Create Recipe</a>
                    </li>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Quintin Hilton</span>
                <a className="text-reset" href="https://github.com/qhilton/startup">GitHub</a>
            </div>
        </footer>
    </div>
  );
}