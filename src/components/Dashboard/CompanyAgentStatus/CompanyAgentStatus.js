import React from 'react';
import salesGroupData from '../../../assets/files/salesGroupData.json';
import { Button, makeStyles } from '@material-ui/core';
import { Typography, Paper, Divider, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',
        height: '410px',
        margin: theme.spacing(4, 5),
        color: '#424242',
    },
    header: {
        padding: theme.spacing(2, 4),
        textAlign: 'left'
    },
    headFont: {
        paddingLeft: theme.spacing(4),
        fontWeight: '600',
    },
    bodyCell: {
        paddingLeft: theme.spacing(4),
    },
    targetCell: {
        width: '25%'
    },
    targetContainer: {
        display: 'flex',
        flexFlow: 'row noWrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    achieveFont: {
        fontWeight: '600'
    },
    progressBar: {
        width: '80%',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: '#e0e0e0'
    },
    remark: {
        color: '#bdbdbd',
        fontSize: '12px',
        textAlign: 'left',
        padding: theme.spacing(1, 4),
    },

}));

const tableHead = ["#", "Team Lead", "City", "Target Achievement", "Due Date", "Action"];

let data = [];

salesGroupData.salesGroupData.forEach( ele => data.push(ele) );

const CompanyAgentStatus = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.root}>

            <Typography variant='h6' className={classes.header}>
                Company Sales Team Status
            </Typography>

            <Divider />

            <Table>
                <TableHead>
                    <TableRow>
                        {tableHead.map( ele => 
                            <TableCell className={classes.headFont} key={ele}>{ele}</TableCell> )}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map( ele => (
                        <TableRow key={ele.id} hover={ true }>
                            <TableCell className={classes.bodyCell} component="th" scope="row">{ele.id}</TableCell>
                            <TableCell className={classes.bodyCell}>{ele.teamLead}</TableCell>
                            <TableCell className={classes.bodyCell}>{ele.city}</TableCell>
                            <TableCell className={classes.targetCell}>
                                <div className={classes.targetContainer}>
                                    <Typography className={classes.achieveFont} color={ele.targetAchieve >= 85 ? 'primary' : 'secondary'}> 
                                        {ele.targetAchieve}% 
                                    </Typography>

                                    <LinearProgress 
                                        variant='determinate' 
                                        value={ele.targetAchieve} 
                                        className={classes.progressBar}
                                        color={ele.targetAchieve >= 85 ? 'primary' : 'secondary'}
                                    />
                                </div>
                            </TableCell>
                            <TableCell className={classes.bodyCell}>{salesGroupData.dueDate}</TableCell>
                            <TableCell className={classes.bodyCell}>
                                <Button variant='contained' color='primary'>DETAILS</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                 </TableBody>       
            </Table>

            <Typography className={classes.remark}>
                * This sales group data is purely fictional. 
                Any resemblance to actual individuals or events are coincidental.
            </Typography>

        </TableContainer>
    );
}

export default CompanyAgentStatus;

