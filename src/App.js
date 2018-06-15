import React, { Component } from 'react';
import ObjectViewer from './components/ObjectViewer'
import Typography from '@material-ui/core/Typography';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <Typography variant="caption" className="title">iconograph[y]</Typography>
        <ObjectViewer />


      </div>
    );
  }
}

export default App;
