import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="main container-fluid bg-secondary text-center">
      <div>
        <h1 className="mb-3">Welcome to Recipe Book</h1>
        <form method="get" action="home.html">
          <div className="input-group mb-3">
            <input className="form-control" type="text" placeholder="username" />
          </div>
          <div className="input-group mb-3">
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}