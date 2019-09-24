import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    const pokemonCards = this.props.pokemons.map(poke => {
      return <PokemonCard poke={poke} />;
    });
    return <Card.Group itemsPerRow={6}>{pokemonCards}</Card.Group>;
  }
}

export default PokemonCollection;
