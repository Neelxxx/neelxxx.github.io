import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Your Name</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/games">Games</Link>
                <Link to="/visualizations">Visualizations</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;