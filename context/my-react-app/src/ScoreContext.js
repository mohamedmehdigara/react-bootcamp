// src/ScoreContext.js
import { createContext, useContext, useState } from 'react';

const ScoreContext = createContext();

export const useScore = () => {
  return useContext(ScoreContext);
};

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const addPoint = (points) => {
    setScore(score + points);
  };

  return (
    <ScoreContext.Provider value={{ score, addPoint }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
