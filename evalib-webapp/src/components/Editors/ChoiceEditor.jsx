import React from 'react';
import PropTypes from 'prop-types';
import { Radio, FormControlLabel, Checkbox, Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import TextEditor from './TextEditor';

class ChoiceEditor extends React.Component {

    handleCheckChange = (e, checked) => {
        this.choice.checked = checked;
        this.props.onChange(this.choice);
    }

    handleTextChange = (text) => {
        this.choice.text = text;
        this.props.onChange(this.choice);
    }

    handleDelete = () => {
        this.props.onDelete(this.choice.label);
    }

    render() {
        const {
            label,
            defaultValue,
            choiceType,
            editMode,
            checked
        } = this.props;

        this.choice = { label, text: defaultValue, checked: checked };

        let inputComponent = <Radio disabled={!editMode}
            checked={checked} onChange={this.handleCheckChange} />

        if (choiceType === 'multiple') {
            inputComponent = <Checkbox disabled={!editMode}
                checked={checked} onChange={this.handleCheckChange} />
        } else if (choiceType !== 'single') {
            console.warn(`Unsupported choice type ${choiceType}, use default Radio button.`)
        }

        return (
            <Grid container alignItems="baseline">
                <Grid item>
                    <FormControlLabel
                        label={`${label}.`}
                        control={inputComponent} />
                </Grid>
                <Grid item xs>
                    <TextEditor editMode={editMode}
                        defaultValue={defaultValue}
                        onChange={(text) => this.handleTextChange(text)} />
                </Grid>
                <Grid item>
                    {editMode ? (<IconButton color="secondary" onClick={this.handleDelete}><DeleteIcon /></IconButton>) : <div />}
                </Grid>
            </Grid>
        )
    }
}

ChoiceEditor.PropTypes = {
    choiceType: PropTypes.oneOf(["single", "multiple"]).isRequired,
    editMode: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
};

ChoiceEditor.defaultProps = {
    choiceType: 'single',
    editMode: true,
    defaultValue: '',
    checked: false,
    onChange: () => { },
    onDelete: () => { }
}

export default ChoiceEditor;