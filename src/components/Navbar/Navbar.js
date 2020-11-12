import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import { AppBar, Toolbar, Typography, Avatar, IconButton, Badge, Backdrop } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import StatusPopover from './StatusPopover/StatusPopover';
import notifications from '../../assets/files/notifications.json';
import { OnlineStyledBadge, OfflineStyledBadge, MeetingStyledBadge } from './StyledBadge/StyledBadge';
import NotificationsCard from './NotificationsCard/NotificationsCard';

const useStyles= makeStyles((theme) => ({
    root: {
        backgroundColor: '#3f51b5',
        color: '#fafafa',
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        margin: theme.spacing(0, 2),
    },
    toolbar: {
        display: 'flex',
        flexFlow: 'row noWrap',
        justifyContent: 'space-between',
    },
    search: {
        backgroundColor: '#fafafa',
        display: 'flex',
        flexFlow: 'row noWrap',
        height: '100%',
        borderRadius: '10px',
        width: '300px',
    },
    searchIcon: {
        margin: theme.spacing(0.25, 1, 0, 1),
    },
    section: {
        display: 'flex',
        flexFlow: 'row npWrap',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(0, 2),
    },
    avatarButton: {
        margin: theme.spacing(0, 2, 0, 1.5),
        width: '40px',
        height: '40px',
    },
    badgeContent: {
        color: '#ffab00',
        backgroundColor: 'white',
        fontSize: '1rem',
        borderRadius: '14px'
    }
}));

const Navbar = () => {
    const classes = useStyles();

    const [ anchorEl, setAnchorEl ] = useState();
    const [ status, setStatus ] = useState('ONLINE');
    const [ checkNotifications, setCheckNotifications ] = useState(false);

    useEffect(() => {
        console.log(checkNotifications);
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const statusChangeHandler = (event, status) => {
        event.preventDefault();
        setStatus(status);
        setAnchorEl(null);
    }

    const openNotificationsHandler = () => {
        setCheckNotifications(!checkNotifications);
    }

    const closeNotificationHandler = () => {
        setCheckNotifications(false);
    }

    const StatusBadge = (status) => {
        switch (status) {
            case 'ONLINE': 
                return (
                    <OnlineStyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} variant="dot" className={classes.dot}>
                        <Avatar>W</Avatar>
                    </OnlineStyledBadge>
                );
            case 'OFFLINE': 
                return (
                    <OfflineStyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} variant="dot" className={classes.dot}>
                        <Avatar>W</Avatar>
                    </OfflineStyledBadge>
                );
            case 'MEETING': 
                return (
                    <MeetingStyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} variant="dot" className={classes.dot}>
                        <Avatar>W</Avatar>
                    </MeetingStyledBadge>
                );
            case 'AWAY': 
                return (
                    <Badge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} badgeContent={<RemoveCircleIcon className={classes.badgeContent} style={{ fontSize: 12 }} />}>
                        <Avatar>W</Avatar>
                    </Badge>
                );
            default: 
                break;
        }
    }

    return (
        <AppBar position='fixed' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>DashBoard</Typography>
                <div className={classes.section}>
                    <IconButton color="inherit">
                        <Badge color='secondary'>
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={openNotificationsHandler}>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                            <Backdrop open={checkNotifications} onClick={closeNotificationHandler}>
                                <NotificationsCard notifications={notifications}/>
                            </Backdrop>
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.avatarButton} aria-describedby={id} onClick={handleClick}>
                        {StatusBadge(status)}
                    </IconButton>
                    <StatusPopover id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} statusChange={statusChangeHandler} />
                </div>        
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;