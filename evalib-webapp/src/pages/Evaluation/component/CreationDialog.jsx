import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core";
import { store } from '../../../store';
import { createEvaluation } from '../../../actions/actions'

class CreationDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'name': '' };
    }

    handleClose = () => {
        this.props.onClose();
    }

    handleCreate = () => {
        store.dispatch(createEvaluation(this.state.name, this.state.description));
        this.setState({ name: '', description: '' });
        this.props.onClose();
    }

    handleTextChange = (e, key) => {
        this.setState({ [key]: e.target.value });
    }

    render() {
        return (
            <Dialog open={this.props.open}>
                <DialogTitle>Create Evaluation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create the evaluation, please enter the evaluation name and description.
                </DialogContentText>
                    <TextField value={this.state.name} onChange={(e) => this.handleTextChange(e, 'name')} autoFocus label="Name" fullWidth />
                    <TextField value={this.state.description} onChange={(e) => this.handleTextChange(e, 'description')} label="Description" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.handleClose}>Cancel</Button>
                    <Button color="primary" onClick={this.handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        );
    }
}


export default CreationDialog;