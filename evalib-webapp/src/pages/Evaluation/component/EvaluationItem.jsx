import React from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Paper, Typography, Avatar, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { withStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";

const styles = theme => ({
    iconButton: {
        margin: 0
    },
    evalItem: {
        height: 80,
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2
    },
    greenAvatar: {
        backgroundColor: green[500],
        width: 30,
        height: 30
    }
});

const EvaluationItem = ({ classes, evalItem, onDelete, onEdit }) => {
    return (
        <Paper className={classes.evalItem}>
            <GridContainer alignItems="baseline">
                <GridItem>
                    <Avatar className={classes.greenAvatar} >
                        <AssignmentIcon />
                    </Avatar>
                </GridItem>
                <GridItem xs>
                    <Typography variant="subheading">{evalItem.name}</Typography>
                    <Typography color="textSecondary">{evalItem.description}</Typography>
                </GridItem>
                <GridItem>
                    <IconButton className={classes.iconButton} onClick={onDelete} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton className={classes.iconButton} onClick={onEdit}>
                        <EditIcon />
                    </IconButton>
                </GridItem>
            </GridContainer>
        </Paper>
    );
}

export default withStyles(styles)(EvaluationItem);