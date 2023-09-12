import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ id, show = true, name, description, hp = 0, type, stage }) => {
  return (
    <div>
      {/* Render your Pokemon card content here */}
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <p>Description: {description}</p>
      <p>HP: {hp}</p>
      <p>Type: {type}</p>
      <p>Stage: {stage}</p>
    </div>
  );
};

// Define prop types for validation
PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  show: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hp: PropTypes.number,
  type: PropTypes.oneOf(['Pokémon', 'Trainer', 'Energy']).isRequired,
  stage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PokemonCard;
