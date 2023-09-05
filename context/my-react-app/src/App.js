// src/App.js
import React from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
import AddPoint from './AddPoint';
import { ScoreProvider } from './ScoreContext';

function App() {
  return (
    <div className="App">
      <ScoreProvider>
        <Scoreboard />
        <AddPoint points={1} />
        <AddPoint points={3} />
      </ScoreProvider>
    </div>
  );
}

export default App;
