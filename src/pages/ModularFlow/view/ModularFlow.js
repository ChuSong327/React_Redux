import React, { Component } from 'react'
import { 
    Card, 
    CardContent,
    Typography 
} from '@material-ui/core'

import Tree from '../../../components/visualization/Tree'

class ModularFlow extends Component {
    render() {
        const projectName = this.props.match.params.project_name
        
        return (
            <div>
                <Typography variant='h4'>
                    { projectName } Modular Flow
                </Typography>
                <Tree />
            </div>
        )
    }
}

export default ModularFlow