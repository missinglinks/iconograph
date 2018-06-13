import React, { Component } from 'react';
import ImageViewer from './components/ImageViewer'
import WikiInfoDrawer from './components/WikiInfoDrawer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WikiInfoDrawer />
        <h1>iconograph[y]</h1>
        <ImageViewer />
      </div>
    );
  }
}

export default App;
