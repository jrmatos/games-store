import React, { Component } from 'react';
import List from '../containers/list';
import AddForm from '../containers/add-form';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <List />
        <AddForm />
      </div>
    );
  }

}

export default App;
