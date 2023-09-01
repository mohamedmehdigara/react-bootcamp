import React from 'react';
import ReactDOM from 'react-dom';

// Create an array of JSX elements for the <li> items
const arrayOfHTML = [
  <li key="1">Bitcoin</li>,
  <li key="2">Ethereum</li>,
  <li key="3">Bitcoin Cash</li>,
  <li key="4">Litecoin</li>
];

// Render the arrayOfHTML elements inside a <ul>
const element = <ul>{arrayOfHTML}</ul>;

ReactDOM.render(element, document.getElementById('root'));
