import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserProfile from './pages/UserProfile';

/**
 * Home page component
 */
// PUBLIC_INTERFACE
function HomePage() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <Link
          className="App-link"
          to="/profile"
          style={{ marginTop: '20px', textDecoration: 'none' }}
        >
          View User Profile →
        </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/**
 * Navigation component for site-wide navigation
 */
// PUBLIC_INTERFACE
function Navigation() {
  const location = useLocation();
  
  // Don't show navigation on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-primary-darker to-primary-dark shadow-lg border-b border-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-white text-xl font-bold hover:text-secondary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-light rounded"
            aria-label="Go to home page"
          >
            React App
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/profile" 
              className={`text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-light rounded px-3 py-2 ${
                location.pathname === '/profile' 
                  ? 'text-secondary-light' 
                  : 'text-gray-300 hover:text-white'
              }`}
              aria-label="Go to profile page"
              aria-current={location.pathname === '/profile' ? 'page' : undefined}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

/**
 * Main App component with routing
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
