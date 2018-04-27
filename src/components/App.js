import React, { Component } from 'react';
import List from '../containers/list';
import '../App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">        
        <List />
      </div>
    );
  }

}

export default App;
