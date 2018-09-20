import React from 'react';
import PropTypes from 'prop-types';
import {
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
    ExpansionPanelActions, IconButton, Grid, withStyles
} from '@material-ui/core';
import { grey } from "@material-ui/core/colors";
import TextEditor from "components/Editors/TextEditor";
import ChoiceEditor from "components/Editors/ChoiceEditor";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const LetterLabels = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const style = theme => ({
    gridMargin: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: grey[100],
        padding: theme.spacing.unit
    },
    actionPanel: {
        paddingTop: 0,
        paddingRight: theme.spacing.unit * 2
    },
    iconButton: {
        margin: 0,
        marginRight: theme.spacing.unit,
    },
});

class ChoiceQuestionEditor extends React.Component {
    choiceQuestion = {}

    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
            editMode: this.props.editMode,
            description: this.props.choiceQuestion.description,
            options: [...this.props.choiceQuestion.options],
            defaultValues: [...(this.props.choiceQuestion.correctAnswer || [])]
        };

        // clone the choice question.
        this.choiceQuestion = JSON.parse(JSON.stringify(this.props.choiceQuestion));
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        });
    }

    handleSave = () => {
        this.props.onSave(this.choiceQuestion);
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleCancel = () => {
        this.props.onCancel();
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleDelete = () => {
        this.props.onDelete();
    }

    handleAddNewOption = () => {
        this.setState({
            options: [...this.state.options, { description: '' }]
        })
    }

    handleDeleteOption = (label) => {
        let newOptions = this.state.options.filter(opt => opt.label !== label);
        this.setState({ options: newOptions });
    }

    handleOptionChange = (option) => {
        var newOptions = this.state.options.map(opt => {
            if (opt.label === option.label) {
                return {
                    label: opt.label,
                    description: option.text
                };
            }
            return opt;
        });

        const { checked } = option;
        var defaultValues = [...this.state.defaultValues];
        if (this.props.choiceType === 'single' && checked) {
            defaultValues = [option.label];
        } else if (this.props.choiceType === 'multiple') {
            if (checked && this.state.defaultValues.indexOf(option.label) === -1) {
                defaultValues = [...this.state.defaultValues, option.label]
            }
            if (!checked) {
                defaultValues = this.state.defaultValues.filter(l => l !== option.label)
            }
        }

        this.choiceQuestion.options = newOptions;
        this.choiceQuestion.correctAnswer = defaultValues;
        this.setState({ options: newOptions, defaultValues });
    }

    handleDescriptionChange = (text) => {
        this.setState({ description: text });
        this.choiceQuestion["description"] = text;
    }

    handleExpandedChange = (e, expanded) => {
        if (this.state.editMode) {
            this.setState({
                expanded: true
            });
        } else {
            this.setState({ expanded })
        }
    }

    render() {
        const { classes, choiceType } = this.props;

        const actionsOnEditMode = [
            { icon: <AddIcon />, tooltip: "Add new option", color: "primary", callback: this.handleAddNewOption },
            { icon: <SaveIcon />, tooltip: "Save", color: "primary", callback: this.handleSave },
            { icon: <CancelIcon />, tooltip: "Save", color: "secondary", callback: this.handleCancel },
        ];
        const actionsNoneEditMode = [
            { icon: <EditIcon />, tooltip: "Edit the choice question", color: "primary", callback: this.handleEdit },
            { icon: <DeleteIcon />, tooltip: "Delete the question", color: "secondary", callback: this.handleDelete }
        ];

        return (
            <ExpansionPanel expanded={this.state.expanded}
                onChange={this.handleExpandedChange}>
                <ExpansionPanelSummary>
                    <Grid container>
                        <Grid item xs>
                            <TextEditor label="Question?"
                                editMode={this.state.editMode}
                                defaultValue={this.state.description}
                                onChange={this.handleDescriptionChange} />
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container className={classes.gridMargin}>
                        {
                            this.state.options.map((option, index) =>
                                <Grid item xs={12} md={12} sm={12} key={option.label}>
                                    <ChoiceEditor key={LetterLabels[index]}
                                        label={LetterLabels[index]}
                                        defaultValue={option.description}
                                        choiceType={choiceType}
                                        editMode={this.state.editMode}
                                        onChange={(updated) => this.handleOptionChange(updated)}
                                        onDelete={() => this.handleDeleteOption(option.label)}
                                        checked={this.state.defaultValues.indexOf(option.label) > -1} />
                                </Grid>)
                        }
                    </Grid>
                </ExpansionPanelDetails>
                <ExpansionPanelActions className={classes.actionPanel}>
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
                </ExpansionPanelActions>
            </ExpansionPanel >)
    }
}

ChoiceQuestionEditor.propTypes = {
    classes: PropTypes.object,
    editMode: PropTypes.bool.isRequired,
    choiceType: PropTypes.oneOf(["single", "multiple"]),
    expanded: PropTypes.bool,
    choiceQuestion: PropTypes.shape({
        description: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                description: PropTypes.string
            })),
        correctAnswer: PropTypes.arrayOf(PropTypes.string)
    }),
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func
};

const DefaultOptions = [
    { label: "A", description: '' },
    { label: "B", description: '' },
    { label: "C", description: '' },
    { label: "D", description: '' }];

ChoiceQuestionEditor.defaultProps = {
    editMode: true,
    choiceType: 'single',
    expanded: true,
    choiceQuestion: {
        description: '',
        options: [...DefaultOptions],
        correctAnswer: []
    },
    onSave: () => { },
    onCancel: () => { },
    onDelete: () => { }
};

export default withStyles(style)(ChoiceQuestionEditor);