import React, { Component } from 'react'
import { 
    makeStyles, 
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse, 
    Typography
} from '@material-ui/core'

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    card: {
        width: 250,
        height: 200,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    title: {
        fontSize: 12
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
            <div className={ classes.root }>
                <Grid 
                    container
                    spacing={1}
                    direction='row'
                    justify='space-between'
                    align-items='center'>
                    { list.map((project,index) => {
                        return (
                            <Grid item key={index}>
                                <Card className={ classes.card }>
                                    <CardHeader 
                                        className={ classes.title }
                                        title={project.name}/>
                                    <CardMedia 
                                        className={ classes.media }
                                        title={ project.name }
                                        image='../../static/images/Nebula.png'/>
                                    <Collapse>
                                        <CardContent>
                                            <Typography>Nebula is an application that...</Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}
    


