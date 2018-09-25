import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid, withStyles, Paper } from '@material-ui/core';
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import RichTextEditor from 'react-rte';

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

class RichTextSubjectEditor extends React.Component {
    richTextSubject = {
        'subjectType': 'richTextSubject'
    };

    constructor(props) {
        super(props);
        this.state = {
            editMode: this.props.editMode,
            richText: RichTextEditor.createValueFromString(
                this.props.richTextSubject.richText, 'html')
        };

        // clone the plain text object.
        Object.assign(this.richTextSubject, this.props.richTextSubject);
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        });
    }

    handleSave = () => {
        this.props.onSave(this.richTextSubject);
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

    handleRichTextChange = (value) => {
        this.setState({ richText: value });
        this.richTextSubject.richText = value.toString('html');
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
                        {
                            this.state.editMode ?
                                <RichTextEditor
                                    value={this.state.richText}
                                    onChange={this.handleRichTextChange} /> :
                                <div dangerouslySetInnerHTML={{ __html: this.state.richText.toString('html') }}></div>
                        }

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

RichTextSubjectEditor.propTypes = {
    classes: PropTypes.object,
    editMode: PropTypes.bool.isRequired,
    richTextSubject: PropTypes.shape({
        richText: PropTypes.string,
    }),
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func
};

RichTextSubjectEditor.defaultProps = {
    editMode: true,
    richTextSubject: {
        richText: '',
    },
    onSave: () => { },
    onCancel: () => { },
    onDelete: () => { }
};

export default withStyles(style)(RichTextSubjectEditor);