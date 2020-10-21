import React, { Component } from 'react';
import { getDetails } from '../services/fetch-characters';
import PropTypes from 'prop-types';

export default class Details extends Component {

    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          characterId: PropTypes.string.isRequired
        })
      })
    };
    
    state = {
      character: ''
    }
  
    componentDidMount = async() => {
      const characterId = this.props.match.params.characterId;
      await getDetails(characterId)
        .then(character => this.setState({ character }));
    }
  
    render() {
      const { character } = this.state;
      return (
        <div>
          <h1> {character.name} </h1>
          <img src={character.image} />
        </div>
      );
    }
}
