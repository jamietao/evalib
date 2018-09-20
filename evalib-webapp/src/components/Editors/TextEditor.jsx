import React from 'react';
import PropTypes from "prop-types";
import { Typography, TextField } from "@material-ui/core"

const TextEditor = ({ label = '', defaultValue, editMode, onChange }) => {
    return (
        editMode ? <TextField label={label}
            defaultValue={defaultValue} multiline
            onChange={(e) => onChange(e.target.value)} fullWidth /> :
            <Typography >{defaultValue}</Typography>
    )
}

TextEditor.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    editMode: PropTypes.bool,
    onChange: PropTypes.func
};

TextEditor.defaultProps = {
    label: '',
    defaultValue: '',
    editMode: true,
    onChange: () => { }
}

export default TextEditor;