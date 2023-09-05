// src/Scoreboard.js
import React from 'react';
import { useScore } from './ScoreContext';

const Scoreboard = () => {
  const { score } = useScore();

  return (
    <div>
      <h1>Scoreboard</h1>
      <p>Score: {score}</p>
    </div>
  );
};

export default Scoreboard;
