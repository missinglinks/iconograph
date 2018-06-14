import React, { Component } from 'react';
import WikiInfoDrawer from './components/WikiInfoDrawer'
import ObjectViewer from './components/ObjectViewer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>iconograph[y]</h1>
        <ObjectViewer />
      </div>
    );
  }
}

export default App;
