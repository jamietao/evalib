import React from 'react';
import { Paper, Tabs, Tab, Typography, Grid, withStyles, IconButton, Switch, FormControlLabel } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { connect } from "react-redux";
import AddAction from './component/AddAction';
import ChoiceQuestionEditor from './component/ChoiceQuestionEditor';
import BackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { addSubject, updateSubject, deleteSubject } from "actions/actions"
import InfoIcon from "@material-ui/icons/Info";

const styles = theme => ({
    pagerContainer: {
        padding: theme.spacing.unit,
        backgroundColor: grey[300],
    },

    itemContainer: {
        marginTop: theme.spacing.unit
    }
});

class EvaluationDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            tabIndex: 0
        };
    }

    onAddNew = () => {
        this.setState({ adding: true });
    }

    handleCancelAddNew = () => {
        this.setState({ adding: false });
    }

    handleUpdate = (question) => {
        this.props.onUpdateSubject(question);
    }

    handleCreate = (question) => {
        let section = this.props.sections[this.state.tabIndex];
        question.sectionId = section.id;
        this.props.onAddSubject(question);
        this.setState({ adding: false });
    }

    handleDelete = (questionId) => {
        this.props.onDeleteSubject(questionId);
    }

    handleTabIndexChange = (e, value) => {
        this.setState({ tabIndex: value });
    }

    render() {
        const { classes, evalItem, sections, subjects } = this.props;
        return (
            <Paper>
                <Grid container>
                    <Grid item>
                        <Link to="/evaluation">
                            <IconButton color="primary"><BackIcon /></IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="headline" align="center">{evalItem.description}</Typography>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            label="Expand All"
                            control={<Switch color="secondary" />}
                        />
                    </Grid>
                </Grid>

                <Tabs indicatorColor="primary"
                    textColor="primary"
                    centered
                    value={this.state.tabIndex}
                    onChange={this.handleTabIndexChange}>
                    {
                        sections.map(section => {
                            return (<Tab key={section.label} label={section.label} />);
                        })
                    }
                </Tabs>
                {
                    <Paper style={{ padding: "24px" }}>
                        <Typography paragraph variant="subheading" component="span">
                            <InfoIcon style={{ fontSize: 16, color: "blue", marginRight: "12px" }} />
                            {sections[this.state.tabIndex].description}
                        </Typography>
                    </Paper>
                }
                {
                    <Grid className={classes.pagerContainer} container>
                        {
                            subjects[this.state.tabIndex].sectionSubjects &&
                            subjects[this.state.tabIndex].sectionSubjects.map((questionItem, key) => {
                                return (
                                    <Grid item key={key} xs={12} md={12} sm={12} className={classes.itemContainer}>
                                        <ChoiceQuestionEditor editMode={false}
                                            choiceType="single" key={key}
                                            choiceQuestion={questionItem}
                                            onSave={(question) => this.handleUpdate(question)}
                                            onDelete={() => this.handleDelete(questionItem.id)}
                                        />
                                    </Grid>
                                )
                            })
                        }
                        {
                            this.state.adding && ["single"].map(() =>
                                <Grid item xs={12} md={12} sm={12} className={classes.itemContainer}>
                                    <ChoiceQuestionEditor editMode={true}
                                        choiceType="single"
                                        onCancel={this.handleCancelAddNew}
                                        onSave={(question) => this.handleCreate(question)} />
                                </Grid>
                            )
                        }
                    </Grid>
                }
                <AddAction callback={this.onAddNew} />
            </Paper>);
    }
}

const mapStateToProps = (state, ownProps) => {
    let evalId = ownProps.match.params.evalId;
    let evalItem = state.evalib.evaluations.find(item => item.id === evalId);
    let sections = state.evalib.sections.filter(item => item.evaluationId === evalId);
    let subjects = sections.map(item => {
        let sectionSubjects = state.evalib.subjects.filter(q => q.sectionId === item.id);
        return {
            "sectionId": item.id,
            "sectionSubjects": sectionSubjects
        };
    });

    return {
        evalItem,
        sections,
        subjects
    };
}

const mapStateToDispatch = (dispatch) => ({
    onAddSubject: (subject) => dispatch(addSubject(subject)),
    onUpdateSubject: (subject) => dispatch(updateSubject(subject)),
    onDeleteSubject: (subjectId) => dispatch(deleteSubject(subjectId))
})

const styledComponent = withStyles(styles)(EvaluationDetails);
export default connect(mapStateToProps, mapStateToDispatch)(styledComponent);