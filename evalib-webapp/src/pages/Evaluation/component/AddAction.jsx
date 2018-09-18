import React from 'react';
import { Button, withStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import AddIcon from "@material-ui/icons/Add";

const style = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        color: theme.palette.common.white,
        backgroundColor: green[500]
    }
});

const AddAction = ({ classes, callback }) => {
    return (
        <Button variant="fab" className={classes.fab} onClick={callback} >
            <AddIcon />
        </Button >
    );
}

export default withStyles(style)(AddAction);