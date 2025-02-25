import React from 'react';
import GameCard from '../components/GameCard';

const Games: React.FC = () => {
    return (
        <div>
            <h2>Games</h2>
            <GameCard
                title="Terminal Game"
                description="A simple terminal-style maze game."
                link="/games/terminal-game"
            />
        </div>
    );
};

export default Games;