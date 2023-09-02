// Parent.js
import React from 'react';

const Parent = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div key={index}>Child {index}...{child}</div>
      ))}
    </div>
  );
};

export default Parent;
