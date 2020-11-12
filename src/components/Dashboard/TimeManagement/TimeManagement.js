import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Assignments from './Assignments/Assignments';
import TimelinePlan from './TimelinePlan/TimelinePlan';

const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(5),
    }
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