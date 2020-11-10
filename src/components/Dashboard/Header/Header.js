import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '104px',
        backgroundColor: '#f5f5f5',
        marginBottom: theme.spacing(4),
    },
    title: {
        paddingLeft: theme.spacing(5),
        // padding: theme.spacing(2, 5),
        color: '#424242',
        textAlign: "left",
    },
    titleContent: {
        padding: theme.spacing(2, 0, 1)
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>                  
                <Typography variant='h5' className={classes.titleContent}>
                    Analytics Dashboard
                </Typography>
                <Typography>
                    This is an unofficial analysis report of sales performance of Apple products from 2011 to 2015. The sales data comes from the Internet.
                </Typography>

            </div>
        </div>
    );
}

export default Header;