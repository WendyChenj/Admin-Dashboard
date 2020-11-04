import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'; 
import { AppBar, Toolbar, Typography, InputBase, Avatar, IconButton, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        width: '12px',
        height: '12px',
        borderRadius: '12px',
        border: '1px solid white',
    }
}))(Badge);

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>DashBoard</Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon color='disabled' />
                    </div>
                    <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </div>
                <div className={classes.section}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color='secondary'>
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.avatarButton}>
                        <StyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} variant="dot" className={classes.dot}>
                            <Avatar>W</Avatar>
                        </StyledBadge>
                    </IconButton>
                </div>
                
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;