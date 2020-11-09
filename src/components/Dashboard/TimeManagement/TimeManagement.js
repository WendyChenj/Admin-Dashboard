import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Grid, Card, CardContent, Divider } from '@material-ui/core';
import Assignments from './Assignments/Assignments';
import TimelinePlan from './TimelinePlan/TimelinePlan';

const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(5),
    },
    // iPhoneBG: {
    //     border: '2px solid #ef5350',
    //     borderBottom: '5px solid #ef5350'
    // },
    // iPadBG: {
    //     border: '2px solid #26a69a',
    //     borderBottom: '5px solid #26a69a'
    // },
    // MacBG: {
    //     border: '2px solid #ffa726',
    //     borderBottom: '5px solid #ffa726'
    // },
    // title: {
    //     padding: theme.spacing(2),
    //     color: '#424242'
    // }
}));

const TimeManagement = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Assignments />
                </Grid>

                <Grid item xs={6}>
                    <TimelinePlan />
                </Grid>
            </Grid>

        </div>
    );
}

export default TimeManagement;