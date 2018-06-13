import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

import '../App.css';

export const ImageViewer = (param) => (
<div className="perimeter">
        <div className="image">
          <ReactImageMagnify {...{
            smallImage: {
              alt: 'Vase',
              isFluidWidth: true,
              src: './images/K_171_s.jpg',
              //sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
              width: 800
            },
            largeImage: {
              alt: '',
              src: 'images/K_171.jpg',
              width: 1200,
              height: 1800
            },
            isHintEnabled: true
          }}/>
        </div>
        <div className="copy">
          Iconograph(y)
        </div>
      </div>
)

export default ImageViewer