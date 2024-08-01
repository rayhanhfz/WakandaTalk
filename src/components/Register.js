import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user }) {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">WakandaTalk.com</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            {user ? (
              <span className="nav-link">Welcome, {user.name}</span>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
