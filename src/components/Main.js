import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import New from './New';
import Edit from './Edit';
import Preview from './Preview';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/products' component={List} />
          <Route exact path='/products/create' component={New} />
          <Route exact path='/products/:id' component={Preview} />
          <Route exact path='/products/:id/edit' component={Edit} />
        </Switch>
      </div>
    );
  }
}

export default Main;
