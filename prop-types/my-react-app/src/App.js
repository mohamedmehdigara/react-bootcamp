import React from 'react';
import ReactDOM from 'react-dom';
import PokemonCard from './PokemonCard';

const App = () => {
  return (
    <div>
      <PokemonCard
        id={1}
        name="Pikachu"
        description="A cute electric-type Pokémon with a lightning bolt-shaped tail."
        type="Pokémon"
      />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
