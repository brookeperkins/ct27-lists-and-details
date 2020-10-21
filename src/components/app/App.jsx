import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Character from '../characters/characterList';
export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Switch>

              <Route
                path="/"
                exact
                render={(routerProps) => <Character {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
