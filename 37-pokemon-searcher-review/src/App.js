import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";
import { Container } from "semantic-ui-react";

const App = () => (
  <Container textAlign="center">
    <PokemonIndex />
  </Container>
);

export default App;
