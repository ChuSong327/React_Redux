import React from 'react'
import { Link } from 'react-router-dom'

import { 
    makeStyles, 
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core'

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 40
    },
    card: {
        width: 260,
        height: 250,
    },
    media: {
        height: 0,
        paddingTop: '46.25%', 
    },
    title: {
        paddingBottom: 0
    },
    content: {
        paddingTop: 10
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export default function DisplayCard(props) {
    const classes = styles() 
    const { list } = props
    const isFetching = props.isFetching
    const path = props.path
    
    if(isFetching) {
        return (
            <div>Loading ...</div>
        )
    } 
    else {
        return (
            <Grid 
                container
                direction='row'
                justify='space-between'
                align-items='center'>
                    { list.map((item,index) => {
                        return (
                            <Grid item key={index}>
                                <Link 
                                    to={`/${path}/${item.name}/${item.version}`} 
                                    className={ classes.link }>
                                    <Card className={ classes.card }>
                                        <CardMedia 
                                            className={ classes.media }
                                            title={ item.name }
                                            image={require(`../../static/images/${item.name}.png`)}/>
                                        <CardHeader 
                                            title={item.name}
                                            className={ classes.title } />
                                        <CardContent className={ classes.content }>
                                            <Typography>{ item.description} </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
            </Grid>
        )
    }
}
    


