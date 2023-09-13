import React from 'react';
import { createRoot } from 'react-dom/client';
import Tilt from './Tilt';


const root = document.getElementById('root');

const tiltOptions = {
  max: 25,
  speed: 300,
  glare: true,
  'max-glare': 0.5,
};

const App = () => (
  <div>
    <h1>Fancy Tilted Div</h1>
    <Tilt options={tiltOptions}>
      <div style={{ width: '200px', height: '200px', background: 'lightblue' }}>
        {/* Your content goes here */}
      </div>
    </Tilt>
  </div>
);

const reactRoot = createRoot(root);
reactRoot.render(<App />);
