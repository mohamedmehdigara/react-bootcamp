import React, { useEffect, useRef } from "react";
import { createRoot } from 'react-dom';
import VanillaTilt from "vanilla-tilt";

const rootElement = document.getElementById("root");

// Create a root instance using createRoot
const root = createRoot(rootElement);

// Define your app component
const App = () => {
  const tiltOptions = {
    max: 25,
    speed: 300,
    glare: true,
    'max-glare': 0.5,
  };

  useEffect(() => {
    const tiltElement = document.querySelector('.tilt-div');
    VanillaTilt.init(tiltElement, tiltOptions);

    return () => {
      tiltElement.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Fancy Tilted Div</h1>
      <div className="tilt-div" style={{ width: '200px', height: '200px', background: 'lightblue' }}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

// Render your app component within the root instance
root.render(<App />);
