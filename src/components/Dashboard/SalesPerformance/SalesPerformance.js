import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Grid, Card, CardContent, Divider } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '210px',
        margin: theme.spacing(4, 5),
    },
    header: {
        padding: theme.spacing(0, 2, 1),
        color: '#424242',
        textAlign: 'left'
    },
    salesContainer: {
        margin: theme.spacing(3,4),
        display: 'flex',
        flexFlow: 'row noWrap',
    },
    productIconContainer: {
        height: '75px',
        width: '75px',
        borderRadius: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productIcon: {
        fontSize: '50px',
        color: 'white',
    },
    salesContent: {
        marginLeft: theme.spacing(1),
        textAlign: 'left',
    },
    salesProduct: {
        color: '#bdbdbd',
        fontSize: '12px',
    },
    growRate: {
        display: 'flex', 
        flexFlow: 'row noWrap', 
        justifyContent:'center',
        color: '#3f51b5'
    },
    successColor: {
        color: '#4caf50'
    },
    failColor: {
        color: '#f44336'
    },
    remarkContainer: {
        textAlign: 'left',
        color: '#bdbdbd',
        fontSize: '12px',
        paddingLeft: theme.spacing(2),
    }
}));

const SalesPerformance = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant='h6' className={classes.header}>
                    Sales Performance - Fourth quarter in 2015
                </Typography>
                <Divider style={{margin: '0 -16px'}}/>

                <Grid container direction='row'>
                    <Grid item xs={4}>
                        <div className={classes.salesContainer}> 
                            <div className={classes.productIconContainer} style={{backgroundColor: '#ef5350'}}>
                                <PhoneIphoneIcon className={classes.productIcon} />
                            </div>
                            <div className={classes.salesContent}>
                                <Typography className={classes.salesProduct}>iPhone Sales</Typography>
                                <Typography variant='h4' style={{fontWeight: '900', color: '#424242'}}>{props.iPhoneSalesFourthQ} M</Typography>
                                <Typography className={classes.growRate}>
                                    Grow Rate: 
                                    {props.iPhoneSalesPerfComp > 0 ? 
                                        <KeyboardArrowUpIcon className={classes.successColor}/>
                                        :  <KeyboardArrowDownIcon className={classes.failColor}/>}
                                    <span className={props.iPhoneSalesPerfComp > 0 ? classes.successColor : classes.failColor}>
                                        {(props.iPhoneSalesPerfComp * 100).toFixed(2)} %
                                    </span>
                                </Typography>
                            </div> 
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.salesContainer}> 
                            <div className={classes.productIconContainer} style={{backgroundColor: '#26a69a'}}>
                                <TabletMacIcon className={classes.productIcon} />
                            </div>
                            <div className={classes.salesContent}>
                                <Typography className={classes.salesProduct}>iPad Sales</Typography>
                                <Typography variant='h4' style={{fontWeight: '900', color: '#424242'}}>{props.iPadSalesFourthQ} M</Typography>
                                <Typography className={classes.growRate}>
                                    Grow Rate: 
                                    {props.iPadSalesPerfComp > 0 ? 
                                        <KeyboardArrowUpIcon className={classes.successColor}/>
                                        :  <KeyboardArrowDownIcon className={classes.failColor}/>}
                                    <span className={props.iPadSalesPerfComp > 0 ? classes.successColor : classes.failColor}>
                                        {Math.abs(props.iPadSalesPerfComp * 100).toFixed(2)} %
                                    </span>
                                </Typography>
                            </div> 
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.salesContainer}> 
                            <div className={classes.productIconContainer} style={{backgroundColor: '#ffa726'}}>
                                <LaptopMacIcon className={classes.productIcon} />
                            </div>
                            <div className={classes.salesContent}>
                                <Typography className={classes.salesProduct}>Mac Sales</Typography>
                                <Typography variant='h4' style={{fontWeight: '900', color: '#424242'}}>{props.MacSalesFourthQ} M</Typography>
                                <Typography className={classes.growRate}>
                                    Grow Rate: 
                                    {props.MacSalesPerfComp > 0 ? 
                                        <KeyboardArrowUpIcon className={classes.successColor}/>
                                        :  <KeyboardArrowDownIcon className={classes.failColor}/>}
                                    <span className={props.MacSalesPerfComp > 0 ? classes.successColor : classes.failColor}>
                                        {Math.abs(props.MacSalesPerfComp * 100).toFixed(2)} %
                                    </span>
                                </Typography>
                            </div> 
                        </div>
                    </Grid>
                </Grid>
                <div className = {classes.remarkContainer}>
                    <Typography className={classes.salesProduct}>* Grow Rate: the comparison of sales data of each product between current quarter and last quarter.</Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default SalesPerformance;