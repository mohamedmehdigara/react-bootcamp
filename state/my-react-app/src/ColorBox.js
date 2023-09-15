import React, { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('gray');

  const getRandomColor = () => {
    // Generate a random color in hexadecimal format
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  };

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default ColorBox;
