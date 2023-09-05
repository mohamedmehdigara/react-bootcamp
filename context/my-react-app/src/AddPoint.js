// src/AddPoint.js
import React from 'react';
import { useScore } from './ScoreContext';

const AddPoint = ({ points }) => {
  const { addPoint } = useScore();

  return (
    <button onClick={() => addPoint(points)}>Add {points} Point(s)</button>
  );
};

export default AddPoint;
