import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarsIcon from '@material-ui/icons/Stars';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Card, ListItem, CardContent, List, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        maxWidth: '540px',
        minWidth: '320px',
    },
    notContainer: {
        display: 'flex',
        flexFlow: 'row noWrap',
        alignItems: 'flex-start'
    },
    cardListText: {
        paddingLeft: theme.spacing(),
    },
    titleContainer: {
        display: 'flex',
        flexFlow: 'row noWrap',
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: '22px',
        paddingLeft: theme.spacing(),
        color: '#3f51b5'
    },
    introText: {
        fontSize: '0.75rem',
        color: '#9e9e9e',
        fontWeight: 500
    }

}))
const NotificationsCard = props => {
    const classes = useStyles();

    const linkIcon = (type, link) => {
        switch(type) {
            case 'portfolio': 
                return (
                    <Link href={link} target='_blank' rel='noopener'>
                        <LinkIcon className={classes.icon} /> 
                    </Link>
                )
            case 'github': 
                return (
                    <Link href={link} target='_blank' rel='noopener'>
                        <GitHubIcon className={classes.icon} /> 
                    </Link>
                )
            case 'linkedin': 
                return (
                    <Link href={link} target='_blank' rel='noopener'>
                        <LinkedInIcon className={classes.icon} /> 
                    </Link>
                )
            case 'email': 
                return (
                    <Link href={'mailto:' + {link}} target='_blank' rel='noopener'>
                        <EmailIcon className={classes.icon} /> 
                    </Link>
                )
            default:
                break;
        }
    }

    return (
        <Card className={classes.cardContainer}>
            <CardContent>
                <Typography variant='h6' style={{fontWeight: 600}}>Notifications</Typography>
                
                <List>
                    {props.notifications.map( ele => (
                        <ListItem className={classes.notContainer} key={ele.type}>
                            <StarsIcon color='secondary'/>
                            <div className={classes.cardListText}>
                                <div className={classes.titleContainer}>
                                    <Typography>
                                        {ele.title}
                                    </Typography>
                                    {linkIcon(ele.type, ele.website)}
                                </div>
                                
                                <Typography className={classes.introText}>{ele.intro}</Typography>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
} 

export default NotificationsCard;