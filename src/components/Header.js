import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">WakandaTalk.com</h1>
          <nav>
            <Link to="/" className="text-white mx-2">Home</Link>
            <Link to="/about" className="text-white mx-2">About</Link>
            <Link to="/contact" className="text-white mx-2">Contact</Link>
            <Link to="/favorites" className="text-white mx-2">Favorites</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
