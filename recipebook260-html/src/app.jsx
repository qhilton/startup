import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import ViewRecipe from './viewRecipe/viewRecipe';
import CreateRecipe from './createRecipe/createRecipe';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <header className="flex">
            <nav className="navbar">
                <div className="ml-2" href="#">Recipe Book</div>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to=''>Login</NavLink>
                    </li>
                    {authState === AuthState.Authenticated && (
                        <li className="nav-item">
                            <NavLink className='nav-link' to='home'>Home</NavLink>
                        </li>
                    )}
                    {/* <span>|</span>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='viewRecipe'>View Recipe</NavLink>
                    </li>
                    <span>|</span>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='createRecipe'>Create Recipe</NavLink>
                    </li> */}
                </menu>
            </nav>
        </header>

            <Routes>
                <Route path='/' element={
                    <Login userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                    }}/>
                } exact />

                <Route path='/home' element={<Home />} />
                <Route path='/viewRecipe/:recipeID' element={<ViewRecipe />} />
                <Route path='/createRecipe' element={<CreateRecipe />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="flex">
                <div className="container-fluid">
                    <span className="text-reset">Quintin Hilton</span>
                    <a className="text-reset" href="https://github.com/qhilton/startup">GitHub</a>
                </div>
            </footer>
        
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default App;