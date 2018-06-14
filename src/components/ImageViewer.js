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

import '../App.css';

export const ImageViewer = (props) => {
  const elements = props.elements.map((elem) =>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        {elem.label}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography align="left">
          {elem.wikipedia_summary}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )



  return (


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

        {elements}

      </div>
    </div>
  )
}


export default ImageViewer