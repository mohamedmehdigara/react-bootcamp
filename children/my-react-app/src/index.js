// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent';

ReactDOM.render(
  <Parent>
    <div>Child 0...</div>
    <div>Child 1...</div>
    <div>Child 2...</div>
    <div>Child 3...</div>
  </Parent>,
  document.getElementById('root')
);
