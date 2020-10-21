import React, { Component } from 'react';
import { fetchCharacters } from '../services/fetch-characters';

export default class Character extends Component {
  state = {
    characters: []
  }

  componentDidMount = async() => {
    const characters = await fetchCharacters();

    this.setState({ characters });
  }

  render() {
    const thisCharacter = this.state.characters.map(character => (
      <li key={character._id}>
        <a href={`/${character._id}`}>
          <h2>{character.name}</h2>
          <img src={character.image}></img>
        </a>
      </li>
    ));

    return (
      <>
        <ul>
          {thisCharacter}
        </ul>
      </>
    );
  }
}
