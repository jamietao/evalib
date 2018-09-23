import React from 'react';
import { Grid, Button, withStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import ChoiceIcon from "@material-ui/icons/ListAlt";
import DescriptionIcon from "@material-ui/icons/Description";

const style = theme => ({
    actionBar: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        width: 50,
    },
    fab: {
        backgroundColor: green[500],
        color: theme.palette.common.white,
    }
});

const AddAction = ({ classes, callback }) => {
    return (
        <Grid container className={classes.actionBar} spacing={8}>
            <Grid item>
                <Button variant="fab" className={classes.fab} onClick={() => callback('singleChoiceQuestion')} >
                    <ChoiceIcon />
                </Button >
            </Grid>
            <Grid item>
                <Button variant="fab" className={classes.fab} onClick={() => callback('passage')}>
                    <DescriptionIcon />
                </Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(style)(AddAction);