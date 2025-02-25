import React from 'react';

interface GameCardProps {
    title: string;
    description: string;
    link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, link }) => {
    return (
        <div className="game-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Play Now</a>
        </div>
    );
};

export default GameCard;