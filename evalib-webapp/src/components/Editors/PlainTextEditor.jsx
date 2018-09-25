import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid, withStyles, Paper } from '@material-ui/core';
import { grey } from "@material-ui/core/colors";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";

import TextEditor from "./TextEditor";

const style = theme => ({
    gridMargin: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        padding: theme.spacing.unit
    },
    iconButton: {
        margin: 0,
        marginRight: theme.spacing.unit,
    },
});

class PlainTextEditor extends React.Component {
    plainTextSubject = {
        'subjectType': 'plainText'
    };

    constructor(props) {
        super(props);
        this.state = {
            editMode: this.props.editMode,
            description: this.props.plainTextSubject.description
        };

        // clone the plain text object.
        Object.assign(this.plainTextSubject, this.props.plainTextSubject);
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        });
    }

    handleSave = () => {
        this.props.onSave(this.plainTextSubject);
        this.setState({
            editMode: false
        });
    }

    handleCancel = () => {
        this.props.onCancel();
        this.setState({
            editMode: false
        });
    }

    handleDelete = () => {
        this.props.onDelete();
    }

    handleDescriptionChange = (text) => {
        this.setState({ description: text });
        this.plainTextSubject["description"] = text;
    }

    render() {
        const { classes } = this.props;

        const actionsOnEditMode = [
            { icon: <SaveIcon />, tooltip: "Save", color: "primary", callback: this.handleSave },
            { icon: <CancelIcon />, tooltip: "Cancel", color: "secondary", callback: this.handleCancel },
        ];
        const actionsNoneEditMode = [
            { icon: <EditIcon />, tooltip: "Edit the passage", color: "primary", callback: this.handleEdit },
            { icon: <DeleteIcon />, tooltip: "Delete the passage", color: "secondary", callback: this.handleDelete }
        ];

        return (
            <Paper>
                <Grid container className={classes.gridMargin}>
                    <Grid item xs={12} md={12} sm={12}>
                        <TextEditor label="Question?"
                            editMode={this.state.editMode}
                            defaultValue={this.state.description}
                            onChange={this.handleDescriptionChange} />
                    </Grid>
                    {
                        <Grid item xs={12} md={12} sm={12}>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    {
                                        (this.state.editMode ? actionsOnEditMode : actionsNoneEditMode).map((action, index) => {
                                            return (
                                                <IconButton color={action.color}
                                                    className={classes.iconButton}
                                                    onClick={action.callback} key={index}>
                                                    {action.icon}
                                                </IconButton>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Paper>
        )
    }
}

PlainTextEditor.propTypes = {
    classes: PropTypes.object,
    editMode: PropTypes.bool.isRequired,
    plainTextSubject: PropTypes.shape({
        description: PropTypes.string,
    }),
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func
};

PlainTextEditor.defaultProps = {
    editMode: true,
    plainTextSubject: {
        description: '',
    },
    onSave: () => { },
    onCancel: () => { },
    onDelete: () => { }
};

export default withStyles(style)(PlainTextEditor);