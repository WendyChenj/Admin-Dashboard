import React from 'react';
import LineChart from './LineChart/LineChart';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(5),
    },
    iPhoneBG: {
        border: '2px solid #ef5350',
        borderBottom: '5px solid #ef5350'
    },
    iPadBG: {
        border: '2px solid #26a69a',
        borderBottom: '5px solid #26a69a'
    },
    MacBG: {
        border: '2px solid #ffa726',
        borderBottom: '5px solid #ffa726'
    },
    title: {
        padding: theme.spacing(2),
        color: '#424242'
    }
}));

const SalesReport = props => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card className={classes.iPhoneBG}>
                        <CardContent className={classes.title}>
                            <Typography >iPhone Sales Report [2011 - 2015]</Typography>
                            <LineChart salesData = { props.salesData } productName='iPhone' />
                        </CardContent>
                    </Card>
                    
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.iPadBG}>
                        <CardContent className={classes.title}>
                            <Typography >iPad Sales Report [2011 - 2015]</Typography>
                            <LineChart salesData = { props.salesData } productName='iPad' />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.MacBG}>
                        <CardContent className={classes.title}>
                            <Typography >Mac Sales Report [2011 - 2015]</Typography>
                            <LineChart salesData = { props.salesData } productName='Mac' />
                        </CardContent>
                    </Card>
                </Grid>
                    
            </Grid>
        </div>
        
    );
}

export default SalesReport;