import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Typography, TableHead, TableRow, TableCell, TableBody, Button, TextField, IconButton, Checkbox } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles( theme => ({
    root: {
        height: '500px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: theme.spacing(0.5),
    },
    headContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: 'flex',
        flexFlow: 'row noWrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#424242',
        fontWeight: 500,
        fontSize: '1.25rem',
    },
    newTask: {
        padding: theme.spacing(1, 2),
        display: 'flex',
        flexFlow: 'row noWrap',
        alignItems: 'center'
    },
    cell: {
        padding: theme.spacing(2, 4),
    }
})); 


const Assignments = () => {
    const classes = useStyles();

    const [ taskAdded, setTaskAdded ] = useState(false);
    const [ task, setTask ] = useState(["Meet with group #2"]);
    const [ newTask, setNewTask ] = useState("");
    const [ checked, setChecked ] = useState(false);

    const addTaskHandler = () => {
        setTaskAdded(true);
        setNewTask("");
    }

    const newTaskHandler = event => {
        setNewTask(event.target.value);
    }

    const submitTaskHandler = event => {
        event.preventDefault();
        setTask([...task, newTask]);
        setTaskAdded(false);
    }

    const closeTaskHandler = () => {
        setTaskAdded(false);
    }

    // const checkedHandler = event => {
    //     setChecked(event.target.checked);
    // }

    const taskList = task.map( ele => (
        <TableRow key={ele}>
            <TableCell className={classes.cell}>
                <div style={{display: 'flex', flexDirection: 'row npWrap'}}>
                    <Checkbox checked={false} color='secondary' />
                    {ele}
                </div>
            </TableCell>
        </TableRow>
    ));
      
    return (
        <TableContainer className={classes.root}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div>
                                <div className={classes.headContainer}>
                                    <Typography className={classes.title}>Tasks List</Typography>
                                    <Button variant='contained' color='secondary' onClick={addTaskHandler}>NEW TASK</Button>
                                </div>   
                                { taskAdded ? 
                                    (<div className={classes.newTask}>
                                        <TextField label='New Task' variant='filled' value={newTask} onChange={newTaskHandler} fullWidth/>
                                        <IconButton onClick={submitTaskHandler}>
                                            <DoneIcon style={{ color: '#4caf50' }} />
                                        </IconButton>
                                        <IconButton onClick={closeTaskHandler}>
                                            <CloseIcon style={{ color: '#ff5722' }}/>
                                        </IconButton>                                        
                                    </div>)
                                    : null}   
                            </div>                     
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {taskList}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Assignments;