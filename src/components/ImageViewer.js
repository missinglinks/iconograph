import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Help from '@material-ui/icons/HelpOutline'
import Save from '@material-ui/icons/Save'
import Forward from '@material-ui/icons/Forward'
import Share from '@material-ui/icons/Share'
import Button from '@material-ui/core/Button';
import { sample } from 'lodash'

import '../App.css';

export const ImageViewer = (props) => {


  const elements = props.elements.map((elem) => {
    
    const image = () => {
       const img = sample(elem.images)
       if (img) 
        return (<img src={img} width="335" />)
    }

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {elem.label}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

            <Typography align="left">
              { image() }
              {elem.wikipedia_summary}
              <br /><br />
              <Button variant="outlined" size="small" href={elem.wikipedia_link} target="new"> Wikipedia <Forward size="small" className="rightIcon"/></Button>
            </Typography>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    )}
  )


  return (
    <div>

      <div className="perimeter">

        <div className="image">
          <ReactImageMagnify {...{
            smallImage: {
              alt: 'Vase',
              isFluidWidth: true,
              src: props.image,
              sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',

            },
            largeImage: {
              alt: '',
              src: props.image,
              width: props.width,
              height: props.height
            },
            isHintEnabled: true
          }}/>
          </div>
          
          <div className="copy">

          </div>
          <div className="elements">
            <div className="description">
              <Typography>
                {props.description}
              </Typography>
            </div>
            {elements}
            <div className="perimeter">
              <Button size="small" variant="outlined" href={props.rdf} target="new"> Linked Art RDF <Share size="small" className="rightIcon"/></Button>
            </div>
          </div>
      </div>


   </div>
  )
}


export default ImageViewer