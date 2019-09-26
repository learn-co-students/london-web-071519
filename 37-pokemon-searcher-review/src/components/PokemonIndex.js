import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const BASE_URL = "http://localhost:4000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  };

  componentDidMount() {
    this.get_pokemons().then(pokemons => this.setState({ pokemons }));
  }

  post_pokemon = pokemon => {
    return fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json());
  };

  get_pokemons = () => {
    return fetch(BASE_URL).then(resp => resp.json());
  };

  handleCreatePokemon = pokemon => {
    this.post_pokemon(pokemon).then(pokemon =>
      this.setState({ pokemons: [pokemon, ...this.state.pokemons] })
    );
  };

  handleSearchTermChange = value => {
    this.setState({ searchTerm: value.toLowerCase() });
  };

  filterPokemons = () => {
    return this.state.pokemons.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
    );
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleCreatePokemon} />
        <br />
        <Search
          onSearchChange={(e, { value }) => this.handleSearchTermChange(value)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={this.filterPokemons()} />
      </div>
    );
  }
}

export default PokemonPage;

// (e, { value }) => {
//   return _.debounce(() => this.handleSearchTermChange(value), 500);
// }
