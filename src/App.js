import React, { Component } from 'react';
import ObjectViewer from './components/ObjectViewer'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="perimeter">
        <div className="header" align="left">
          <img src="images/logo.png" />
        </div>
        </div>

        <ObjectViewer />

        <div className="footer">

            <Typography>
              Alle Graphiken und Metadaten wurden vom <a href="https://www.lindenau-museum.de/" target="new">Lindenau-Museum Altenburg</a> zur Verfügung gestellt.<br />
              Lizenz: <a href="https://creativecommons.org/licenses/by/4.0/deed.deCC-BY-SA 4.0 DE">CC-BY 4.0 International </a>
            </Typography>
             

            <br />

            <Typography>
              <b>iconograph[y]</b> ist im Rahmen des <a href="https://codingdavinci.de/events/ost/" target="new">Coding Da Vinci Ost 2018</a> entstanden.<br />
              Lizenz: <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GENERAL PUBLIC LICENSE Version 3</a> - <a href="mailto:peter.muehelder@uni-leipzig.de">Kontakt</a> - <a href="https://github.com/missinglinks/iconography">Github</a> <a href="https://github.com/missinglinks/iconography-frontend">*</a>

            </Typography>

        </div>

      </div>
    );
  }
}

export default App;
