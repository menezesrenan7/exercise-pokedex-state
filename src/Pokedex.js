import React from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonType: '',
            listSize: 0,
            index: 0
        }
        this.changePokemon = this.changePokemon.bind(this);
        this.getPokemonTypeList = this.getPokemonTypeList.bind(this);
        this.filterPokemonListByType = this.filterPokemonListByType.bind(this);
    }
    changePokemon() {
        this.setState(state => ({
            index: (state.index === state.listSize) ? 0 : state.index + 1
        }))
    };

    getPokemonTypeList() {
        const firstList = data.map(pokemon => pokemon.type);
        return firstList.reduce((acc, pokemonType) => {
          if(acc.some(pokeType => pokeType === pokemonType));
          acc.push(pokemonType);
          return acc;
        }, []);
      };

      filterPokemonListByType(event) {
        const filteredPokemonListByType = this.props.pokemon.filter(pokemon => pokemon.type === event.target.value);
        this.setState({
            type: event.target.value,
            listSize: filteredPokemonListByType.length - 1,
            index: 0
        })
    }

    render() {
        this.setState({filter: ''});
        const { pokemons } = this.props;
        console.log(pokemons);
        // const filteredPokemonListByType = pokemons.filter(pokemon => pokemon.type === this.state.type);
        return (
            <div className="pokedex">
                <Pokemon key={pokemons.filter(pokemon => pokemon.type === this.state.pokemonType)[this.state.index].id} pokemon={pokemons.filter(pokemon => pokemon.type === this.state.pokemonType)[this.state.index]} />
                
                {this.getPokemonTypeList.map(type => <button onClick={this.filterPokemonListByType}>{type}</button>)}

                <button onClick={this.changePokemon}>Próximo Pokemon</button>
                <button onClick={() => this.setState({pokemonType: ''})}>All</button>
            </div>
        );
    }
}

export default Pokedex;