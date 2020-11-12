import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import { Popover, Typography, List, ListItem } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles= makeStyles((theme) => ({
    root: {
        marginTop: '12px',
        color: '#424242'
    },
    contentContainer: {
        padding: theme.spacing(2),
        width: '180px',
    },
    onlineIcon: {
        width: '16px',
        height: '16px',
        color: '#44b700',
        border: '1px solid #eeeeee',
        borderRadius: '16px',
    },
    offlineIcon: {
        width: '16px',
        height: '16px',
        color: '#424242',
        border: '1px solid #eeeeee',
        borderRadius: '16px',
    },
    meetingIcon: {
        width: '16px',
        height: '16px',
        color: '#f44336',
        border: '1px solid #eeeeee',
        borderRadius: '16px',
    },
    awayIcon: {
        width: '16px',
        height: '16px',
        color: '#ffab00',
        border: '1px solid #eeeeee',
        borderRadius: '16px',
    },
    statusText: {
        fontSize: '0.8rem',
        color: '#424242',
        paddingLeft: theme.spacing(6),  
        fontWeight: '600',  
    }
}));

const StatusCell = props => {
    const classes= useStyles();

    return (
        <ListItem className={classes.statusCell} button onClick={(event) => props.statusChange(event, props.status)}>
            {props.children}
            <Typography className={classes.statusText}>{props.status}</Typography>
        </ListItem>
    );
}

const StatusPopover = props => {
    const classes= useStyles();

    const statusData = ['ONLINE', 'MEETING', 'AWAY', 'OFFLINE'];

    const styledStatusIcon = status => {
        switch(status) {
            case 'ONLINE': 
                return <FiberManualRecordIcon className={classes.onlineIcon} />
            case 'OFFLINE': 
                return <RadioButtonUncheckedIcon className={classes.offlineIcon} /> 
            case 'MEETING':
                return <FiberManualRecordIcon className={classes.meetingIcon} />
            case 'AWAY':
                return <RemoveCircleIcon className={classes.awayIcon} />  
            default:
                break
        }
    }

    return (
        <Popover id={props.id} open={props.open} anchorEl={props.anchorEl} onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            className={ classes.root}
        >
            <div className={classes.contentContainer}>
                <Typography style={{fontWeight: '600', color: '#424242'}}>Status Change</Typography>
                <List>
                    {statusData.map( ele => (
                    <StatusCell key={ ele } status={ ele } statusChange={props.statusChange}>
                        { styledStatusIcon(ele) }
                    </StatusCell>
                    ))}
                </List>
                
            </div>
            
        </Popover>
    );
}

export default StatusPopover;