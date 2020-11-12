import React, { useState } from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Typography, TableHead, TableRow, TableCell, TableBody, Button, TextField, IconButton, Checkbox } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

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
        display: 'flex',
        flexFlow: 'row noWrap',
        alignItems: 'center',
    },
    selectedCell: {
        display: 'flex',
        flexFlow: 'row noWrap',
        alignItems: 'center',
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(2),
        justifyContent: 'space-between'
    }
})); 


const Assignments = () => {
    const classes = useStyles();

    const [ taskAdded, setTaskAdded ] = useState(false);
    const [ task, setTask ] = useState(["Visit Wendy's portfolio", "Contact with Wendy Chen", "Have an interview with Wendy Chen 😃"]);
    const [ newTask, setNewTask ] = useState("");
    const [ selected, setSelected ] = useState([]);

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

    // selected list
    const selectedHandler = (event, name) => {
        event.preventDefault();
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
              selected.slice(0, selectedIndex),
              selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    }

    // determine if this row has been selected
    const isSelected = (name) => selected.indexOf(name) !== -1;

    const removeItemHandler = (event) => {
        event.preventDefault();
        let newTaskList = [];

        newTaskList = task.filter(ele => selected.indexOf(ele) === -1);
        setTask(newTaskList);
        setSelected([]);
    }

    const taskList = task.map( ele => (
        <TableRow key={ele} onClick={event => selectedHandler(event, ele)}>
            <TableCell>
                <div className={classes.cell}>
                    <Checkbox color='secondary' checked={isSelected(ele)} />
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
                    {selected.length > 0 ? 
                        (<TableRow>
                            <TableCell className={classes.selectedCell}>
                                <Typography>
                                    {selected.length} rows selected
                                </Typography>
                                <IconButton onClick={removeItemHandler}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>)
                        : null
                    }
                    {task.length === 0 ? 
                        <Typography style={{ paddingTop: '12px' }}>Please add a new task</Typography>
                        : taskList}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Assignments;