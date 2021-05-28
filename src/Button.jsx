import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Button extends Component {
  constructor() {
    super();

    this.pokemonTypeList = this.pokemonTypeList.bind(this);
    this.filterPokemonListByType = this.filterPokemonListByType.bind(this);
  }

  filterPokemonListByType = () => {
    const filteredPokemonList = this.props.pokemon.filter(pokemon => pokemon.type === 'Psychic');
        this.setState({
            filter: 'Psychic',
            size: filteredPokemonList.length - 1,
            index: 0
        })
  }

  render() {
    const pokemonTypeList = pokemonTypeList();
    return (
      <Pokedex>
        {/* {pokemonTypeList.map(pokemon => <button type={pokemon.type} onCLick={filterPokemonListByType}>{pokemon.type}</button>)} */}
      </Pokedex>
    );
  }
}
export default Button;