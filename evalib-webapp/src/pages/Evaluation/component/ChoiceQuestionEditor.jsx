import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Button, TextField, withStyles, Checkbox, IconButton, Typography } from '@material-ui/core';
import { Radio, FormControlLabel } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { grey, yellow } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const DefaultOptions = [
    { label: "A" }, { label: "B" }, { label: "C" }, { label: "D" }
];

const style = theme => ({
    expansionHeader: {
        backgroundColor: yellow[100],
    },

    expansionBody: {
    },

    gridMargin: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: grey[100],
        padding: theme.spacing.unit
    }
});

const TextEditor = ({ label = '', description, editMode, onChange }) => {
    return (
        editMode ? <TextField label={label} defaultValue={description} onChange={onChange} fullWidth /> :
            <Typography >{description}</Typography>
    )
}

const ChoiceItem = ({ label, description, choiceType, editMode }) => {
    let inputComponent = <Radio />
    if (choiceType === 'single') {
        inputComponent = <Radio />
    } else if (choiceType === 'multiple') {
        inputComponent = <Checkbox />
    } else {
        throw `Unsupported choice type ${choiceType}`;
    }

    return (
        <Grid container xs={12} md={12} sm={12} alignItems="baseline">
            <Grid item>
                <FormControlLabel
                    value={label}
                    label={`${label}.`}
                    control={inputComponent} />
            </Grid>
            <Grid item xs>
                <TextEditor editMode={editMode} description={description} onChange={() => { }} />
            </Grid>
            <Grid item>
                {editMode ? (<IconButton color="secondary"><DeleteIcon /></IconButton>) : <div />}
            </Grid>
        </Grid>
    )
}

class ChoiceQuestionEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    handleEditOrSave = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleCancel = () => {
        this.setState({ editMode: false });
    }

    render() {
        const { description, classes } = this.props;
        const options = this.props.options || DefaultOptions;

        return (
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary>
                    <Grid container xs={12} md={12} sm={12}>
                        <Grid item xs>
                            <TextEditor editMode={this.state.editMode} description={description} label="Question?" />
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionBody}>
                    <Grid container className={classes.gridMargin}>
                        {
                            options.map((option) =>
                                <ChoiceItem key={option.label}
                                    label={option.label}
                                    description={option.description}
                                    choiceType="single"
                                    editMode={this.state.editMode} />)
                        }
                    </Grid>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button size="small" color="primary" onClick={this.handleEditOrSave}>{this.state.editMode ? "Save" : "Edit"}</Button>
                    <Button size="small" color="secondary" onClick={this.handleCancel}>Cancel</Button>
                </ExpansionPanelActions>
            </ExpansionPanel >)
    }
}

export default withStyles(style)(ChoiceQuestionEditor);