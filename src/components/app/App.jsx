import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Character from '../characters/characterList';
import Details from '../characters/characterDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <Character {...routerProps} />} 
            />
            <Route 
              path="/:characterId" 
              render={(routerProps) => <Details {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}