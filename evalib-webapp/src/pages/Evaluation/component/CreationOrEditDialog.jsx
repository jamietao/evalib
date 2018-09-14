import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core";
import { store } from '../../../store';
import { createEvaluation, updateEvaluation } from '../../../actions/actions'

class CreationOrEditDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
    }

    handleClose = () => {
        this.props.onClose();
    }

    getEvalId = () => {
        return (this.props.evalItem && this.props.evalItem.id) || -1;
    }

    handleCreateOrUpdate = () => {
        let evalId = this.getEvalId();
        if (evalId === -1) {
            store.dispatch(createEvaluation(
                this.state.name, this.state.description));
        } else {
            store.dispatch(updateEvaluation(
                evalId, this.state.name, this.state.description))
        }

        this.setState({ name: '', description: '' });
        this.props.onClose();
    }

    handleTextChange = (e, key) => {
        this.setState({ [key]: e.target.value });
    }

    render() {
        let createOrUpdate = this.getEvalId() === -1 ? 'create' : 'update';
        let name = (this.props.evalItem && this.props.evalItem.name) || '';
        let description = (this.props.evalItem && this.props.evalItem.description) || '';

        return (
            <Dialog open={this.props.open}>
                <DialogTitle>
                    {this.getEvalId() === -1 ? "Create Evaluation" : "Update Evaluation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To {createOrUpdate} the evaluation, please enter the evaluation name and description.
                    </DialogContentText>
                    <TextField defaultValue={name} onChange={(e) => this.handleTextChange(e, 'name')} autoFocus label="Name" fullWidth />
                    <TextField defaultValue={description} onChange={(e) => this.handleTextChange(e, 'description')} label="Description" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.handleClose}>Cancel</Button>
                    <Button color="primary" onClick={this.handleCreateOrUpdate}>{this.getEvalId() === -1 ? 'Create' : 'Save'}</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default CreationOrEditDialog;