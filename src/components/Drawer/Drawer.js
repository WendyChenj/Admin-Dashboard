import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CategoryIcon from '@material-ui/icons/Category';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    menu: {
        width: 240,
        marginTop: theme.spacing(10),
    },
    title: {
        color: '#1a237e',
        fontWeight: '600',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    }
}));

const TitleListItem = props => {
    const classes = useStyles();
    return (
        <ListItem alignItems='flex-start' className={classes.title}>
            <Typography className={classes.title}>{props.name}</Typography>
        </ListItem>
    ); 
}

const Item = props => {
    return (
        <ListItem button>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText primary={props.name} />
        </ListItem>
    );
}

const SideDrawer = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const clickOpenHandler = () => {
        setOpen(!open);
    }

    return (
        <Drawer variant='permanent'>
            <div className={classes.menu}>
                <List>
                    <TitleListItem name='ADMINISTRATION' />
                     
                    <ListItem button onClick={clickOpenHandler}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                            <NavLink to='/analytics' activeStyle={{color: '#1a237e', textDecoration: 'none'}}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AssessmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Analytics' />
                                </ListItem>
                            </NavLink>
                    </Collapse>

                    <Item name='Users Management'>
                        <GroupIcon />
                    </Item>

                    <TitleListItem name='NEWS' />

                    <Item name='Assignments'>
                        <AssignmentIcon />
                    </Item>

                    <Item name='Categories'>
                        <CategoryIcon />
                    </Item>

                    <Item name='Tags'>
                        <LocalOfferIcon />
                    </Item>
                </List>
            </div>          
        </Drawer>
    );
}

export default SideDrawer;