import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorBox from './ColorBox';

const App = () => {
  const colorBoxes = Array.from({ length: 30 }, (_, index) => (
    <ColorBox key={index} />
  ));

  return (
    <div className="color-box-container">
      {colorBoxes}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
