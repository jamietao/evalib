import React from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Paper, Typography, Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { withStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";

const styles = theme => ({
    evalItem: {
        height: 80,
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2
    },
    greenAvatar: {
        backgroundColor: green[500],
        width: 50,
        height: 50
    }
});

const EvaluationItem = ({ classes, evalItem }) => {

    return (
        <Paper className={classes.evalItem}>
            <GridContainer>
                <GridItem><Avatar className={classes.greenAvatar}><AssignmentIcon /> </Avatar></GridItem>
                <GridItem xs>
                    <Typography variant="subheading">{evalItem.name}</Typography>
                    <Typography color="textSecondary">{evalItem.description}</Typography>
                </GridItem>
                <GridItem><DeleteIcon color="secondary" /><EditIcon /></GridItem>
            </GridContainer>
        </Paper>
    );
}

export default withStyles(styles)(EvaluationItem);