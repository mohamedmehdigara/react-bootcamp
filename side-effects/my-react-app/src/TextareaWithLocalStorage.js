import React, { useState, useEffect } from 'react';

const TextareaWithLocalStorage = () => {
  // Initialize the state with the value from localStorage (if available)
  const [text, setText] = useState(localStorage.getItem('textareaValue') || '');

  // Update localStorage when the text state changes
  useEffect(() => {
    localStorage.setItem('textareaValue', text);
  }, [text]);

  // Handle changes to the textarea
  const handleTextareaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Textarea with LocalStorage</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextareaChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default TextareaWithLocalStorage;
