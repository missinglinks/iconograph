import React, { Component } from 'react'
import ImageViewer from './ImageViewer'
import Typography from '@material-ui/core/Typography'

class ObjectViewer extends Component {
    constructor() {
        super()
        this.state = {
            artifact: {},
            elements: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:6660/object')
            .then((results) => results.json())
            .then((json) => {
                this.setState( {
                        elements: json.elements,
                        artifact: json
                    })
                console.log(this.state)
            })
    }

    renderImageViewer () {
        if (this.state.artifact) {
            return (
                <ImageViewer 
                    image={this.state.artifact.image } 
                    image_s={this.state.artifact.image_s } 
                    width={this.state.artifact.width}
                    height={this.state.artifact.height}
                    elements={[...this.state.elements]}
                    description={this.state.artifact.description}
                    rdf={this.state.artifact.rdf_file}
                    />
            )
        }
    }

    render() {
        return (
            <div>

                 <Typography variant="display2">{ this.state.artifact.title }</Typography>

                {  this.renderImageViewer() }
            </div>
        )
    }
}

export default ObjectViewer