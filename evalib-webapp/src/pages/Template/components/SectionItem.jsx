import React from 'react';
import {
    withStyles, Grid, IconButton, Icon, Typography,
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions
} from '@material-ui/core';
import EditorDialog from '../../../components/Editors/EditorDialog';

const styles = theme => ({
    iconButton: {
        margin: 0,
        marginLeft: 8,
        width: 30,
        height: 30
    },
});

class SectionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,

        }
    }

    handleEdit = () => {
        this.setState({ editMode: true });
    }

    handleUpdate = (updated) => {
        alert(JSON.stringify(updated));
        this.setState({ editMode: false });
    }

    render() {
        const { sectionData, onDelete, classes } = this.props;

        const formData = [
            { name: 'label', defaultValue: sectionData.label, label: 'Label' },
            { name: 'description', defaultValue: sectionData.description, label: 'Description', multiline: true }
        ];

        return (
            <React.Fragment>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                        <Grid container>
                            <Grid item xs>
                                <Typography>{sectionData.label}</Typography>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography paragraph variant="subheading">
                            <Icon style={{ fontSize: 16, color: "blue", marginRight: "12px" }}>info</Icon>
                            {sectionData.description}
                        </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelActions>
                        <IconButton className={classes.iconButton} onClick={this.handleEdit}><Icon>edit</Icon></IconButton>
                        <IconButton className={classes.iconButton} onClick={onDelete}><Icon>delete</Icon></IconButton>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <EditorDialog
                    title="Edit Section"
                    description="Edit the section"
                    formData={formData}
                    openState={this.state.editMode}
                    onChange={(updated) => this.handleUpdate(updated)}
                    onCancel={() => this.setState({ editMode: false })} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SectionItem);