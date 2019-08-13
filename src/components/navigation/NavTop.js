import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                    <a href='/projects' style={{ textDecoration: 'none', color: 'inherit'}}>
                        <Typography>EEE</Typography>
                    </a>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavTop
