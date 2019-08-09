import React, { Component } from 'react'
import {
    AppBar,
    Toolbar, 
    Typography 
} from '@material-ui/core'

class NavTop extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography>EEE</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavTop
