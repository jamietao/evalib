import React from 'react';
import PropTypes from 'prop-types';

import {
    Dialog, DialogTitle, DialogContent,
    DialogContentText, TextField, DialogActions, Button
} from "@material-ui/core";

class EditorDialog extends React.Component {
    data = {};

    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.formData || [],
            createOrUpate: 'create'
        };

        this.state.formData.forEach(item => {
            this.data[item.name] = item.defaultValue;
        });
    }

    handleTextChange = (e, key) => {
        this.data[key] = e.target.value;
    }

    handleSave = () => {
        this.props.onChange(this.data);
    }

    render() {
        const { title, description, onCancel } = this.props;

        return (
            <Dialog open={this.props.openState} >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{description}</DialogContentText>
                    {
                        this.state.formData.map(item => {
                            return (
                                <TextField key={item.name} fullWidth
                                    defaultValue={item.defaultValue}
                                    onChange={(e) => this.handleTextChange(e, item.name)}
                                    label={item.label} multiline={item.multiline} />
                            );
                        })
                    }
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onCancel}>Cancel</Button>
                    <Button color="primary" onClick={this.handleSave}>
                        {this.state.createOrUpdate === 'create' ? 'Create' : 'Save'}
                    </Button>
                </DialogActions>
            </ Dialog>
        );
    }
}

EditorDialog.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    formData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            defaultValue: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ),
    createOrUpdate: PropTypes.oneOf(['create', 'update']),
    onCancel: PropTypes.func,
    onChange: PropTypes.func
};

EditorDialog.defaultProps = {
    title: '',
    description: '',
    createOrUpate: 'create',
    onCancel: () => { },
    onChange: () => { }
}

export default EditorDialog;