import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import DisplayCard from '../../../components/surfaces/DisplayCard'
import * as constants from '../constants'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 40
    }
})



class Projects extends Component {
    componentDidMount() {
        // Fetch projects list from server
        this.props.fetchProjects()
    }

    render() {
        const { classes } = this.props
        const { list } = this.props
        const isFetching = this.props.isFetching
        
        return (
            <div className={ classes.root }>
                <DisplayCard 
                    list={ list }
                    isFetching={ isFetching }
                    path={ constants.PATH }/>
            </div>
        )
    }
}

export default withStyles(styles)(Projects)