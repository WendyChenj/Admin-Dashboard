import React, { useState } from 'react';
import schedule from '../../../../assets/files/schedule.json';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button, TextField } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineDot, TimelineOppositeContent, TimelineContent, TimelineSeparator, TimelineConnector } from '@material-ui/lab';

const useStyle = makeStyles((theme) => ({
    root: {
        height: '500px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: theme.spacing(0.5),
    },
    headerContainer: {
        height: '69px',
        margin: theme.spacing(-2),
        padding: theme.spacing(0, 4),
        backgroundColor: '#fafafa',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        display: 'flex',
        flexFlow: 'row noWrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#424242',
        fontWeight: 500,
        fontSize: '1.25rem',
        textAlign: 'left'
    },
    timeline: {
        textAlign: 'left',
        padding: theme.spacing(4, 0),
    },
    timelineOpposite: {
        width: theme.spacing(4),
        flex: 0.3
    }
}));

const TimelinePlan = () => {

    const [ isEdited, setIsEdited ] = useState(false);
    const [ scheduleList, setScheduleList ] = useState([ ...schedule.timelineSchedule ]);
    const classes = useStyle();

    const openEditHandler = () => {
        setIsEdited(true);
    }

    const valueChangeHandler = (event, id, type) => {
        event.preventDefault();
        let newScheduleList = [];
        let newSchedule = {};
        newScheduleList = scheduleList.map( (ele) => {
            if (ele.id === id) {
                if (type === 'date') {
                    newSchedule = {
                        ...ele,
                        date: event.target.value
                    }
                } else if (type === 'event') {
                    newSchedule = {
                        ...ele,
                        "event": event.target.value
                    }
                }
                console.log(newSchedule);
                return newSchedule;
            } else { return ele}
        });

        console.log(newScheduleList);

        setScheduleList(newScheduleList);
    }

    const closeEditHandler = () => {
        setIsEdited(false);
    }

    return (
        <Card className={classes.root} variant='outlined'>
            <CardContent>
                <div className={classes.headerContainer}>
                    <Typography className={classes.title}>Monthly Timeline</Typography>
                    { isEdited ? 
                        (<Button variant='contained' style={{backgroundColor: '#009688', color: 'white'}} onClick={closeEditHandler}>
                            Save
                        </Button>)
                        : (<Button variant='contained' style={{backgroundColor: '#009688', color: 'white'}} onClick={openEditHandler}>
                            Edit
                        </Button>) }
                </div>
                
                <Timeline className={classes.timeline}>
                    {scheduleList.map( ele => (
                        <TimelineItem key={ele.id}>
                            <TimelineOppositeContent className={classes.timelineOpposite}>
                                { isEdited ? 
                                    <TextField id="outlined-basic" label='New Date' value={ ele.date } variant="outlined" 
                                        onChange={ event => valueChangeHandler(event, ele.id, 'date')} />
                                    : <Typography>{ele.date}</Typography> }
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={ ele.id % 2 === 0 ? 'secondary' : 'primary' } />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                { isEdited ? 
                                <TextField id="outlined-basic" label='New Event' value={ ele.event } variant="outlined" style={{ width: '100%'}}
                                    onChange={event => valueChangeHandler(event, ele.id, 'event')}/>
                                : <Typography>{ele.event}</Typography> }
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </CardContent>
        </Card>
    );
}

export default TimelinePlan;