import React from 'react';
import {
    Paper, Card, CardHeader, CardContent,
    Avatar, withStyles, IconButton, Icon
} from '@material-ui/core';

import face from "assets/img/faces/marc.jpg";
import SectionItem from './SectionItem';
import EditorDialog from 'components/Editors/EditorDialog';

const styles = theme => ({
    iconButton: {
        margin: 0,
        marginLeft: 8,
        width: 30,
        height: 30
    },
});

class TemplateItem extends React.Component {
    constructor(props) {
        super(props);

        let templateDataCopy = {};

        Object.assign(templateDataCopy, this.props.templateData);
        this.state = {
            'templateData': templateDataCopy
        };
    }

    handleAdding = () => {
        this.setState({ adding: true });
    }

    handleDeleteSection = (sectionId) => {
    }

    handleSectionUpdate = (sectionData) => {
    }

    handleAddNewSection = (sectionData) => {
        this.setState({
            "adding": false
        });
    }

    render() {
        const { onDelete, classes } = this.props;
        const formData = [
            { name: 'label', defaultValue: '', label: 'Label' },
            { name: 'description', defaultValue: '', label: 'Description', multiline: true }
        ];

        return (
            <Card>
                <CardHeader
                    avatar={<Avatar aria-label="Recipe" src={face} />}
                    title={this.state.templateData.title}
                    subheader={this.state.templateData.lastUpdateTime}
                    action={
                        <React.Fragment>
                            <IconButton className={classes.iconButton} onClick={onDelete}>
                                <Icon color="secondary">delete</Icon>
                            </IconButton>
                            <IconButton className={classes.iconButton} onClick={this.handleAdding}>
                                <Icon>add</Icon>
                            </IconButton>
                        </React.Fragment>
                    }
                />
                <CardContent>
                    <Paper>
                        {
                            this.state.templateData.sections &&
                            this.state.templateData.sections.map(item => {
                                return (
                                    <SectionItem sectionData={item}
                                        onDelete={() => this.handleDeleteSection(item.id)}
                                        onChange={(sectionData) => this.handleSectionUpdate(sectionData)} />
                                );
                            })
                        }
                    </Paper>

                    <EditorDialog
                        title="Add Section"
                        description="Add new section"
                        formData={formData}
                        openState={this.state.adding}
                        onChange={(sectionData) => this.handleAddNewSection(sectionData)}
                        onCancel={() => this.setState({ adding: false })} />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(TemplateItem);