import React, { Component } from 'react'
import { 
    makeStyles, 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse, 
    Typography
} from '@material-ui/core'

const styles = makeStyles(theme => ({
    card: {
        width: 350
    }
}))

export default function DisplayCard(props) {
    const classes = styles() 
    const { list } = props
    const isFetching = props.isFetching
    
    if(isFetching) {
        return (
            <div>Loading ...</div>
        )
    } 
    else {
        return (
            <div>
               { list.map((project,index) => {
                    return (
                        <Card className={ classes.card } key={index}>
                            <CardHeader 
                                title={project.name}/>
                            <CardMedia 
                                title="Nebula"/>
                            <Collapse>
                                <CardContent>
                                    <Typography>Nebula is an application that...</Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    )
               })}
            </div>
        )
    }
}
    


