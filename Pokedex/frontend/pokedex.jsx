import React from 'react';
import ReactDOM from 'react-dom';
import {RECEIVE_ALL_POKEMON, receiveAllPokemon} from './actions/pokemon_actions';

window.receiveAllPokemon = receiveAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<div>REACT IS WORKING!!!!</div>, root)
})