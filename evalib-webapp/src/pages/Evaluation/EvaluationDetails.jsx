import React from 'react';
import { Paper, Tabs, Tab, Typography, Grid, withStyles, IconButton, Switch, FormControlLabel } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { connect } from "react-redux";
import AddAction from './component/AddAction';
import ChoiceQuestionEditor from './component/ChoiceQuestionEditor';
import BackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { addChoiceQuestion, updateChoiceQuestion, deleteChoiceQuestion } from "actions/actions"

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
            adding: false
        };
    }

    onAddNew = () => {
        this.setState({ adding: true });
    }

    handleCancelAddNew = () => {
        this.setState({ adding: false });
    }

    handleUpdate = (question) => {
        this.props.onUpdateChoiceQuestion(this.props.evalItem.id, question);
    }

    handleCreate = (question) => {
        this.props.onAddChoiceQuestion(this.props.evalItem.id, question);
        this.setState({ adding: false });
    }

    render() {
        const { classes, evalItem } = this.props;
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

                <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
                    <Tab label="写作" />
                    <Tab label="听力" />
                    <Tab label="阅读理解" />
                    <Tab label="翻译" />
                </Tabs>

                <Grid className={classes.pagerContainer} container>
                    {
                        evalItem.singleChoiceQuestions && evalItem.singleChoiceQuestions.map((questionItem, key) => {
                            return (
                                <Grid item key={key} xs={12} md={12} sm={12} className={classes.itemContainer}>
                                    <ChoiceQuestionEditor editMode={false}
                                        choiceType="single" key={key}
                                        choiceQuestion={questionItem}
                                        onSave={(question) => this.handleUpdate(question)}
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
                <AddAction callback={this.onAddNew} />
            </Paper>);
    }
}

const mapStateToProps = (state, ownProps) => {
    let evalId = ownProps.match.params.evalId;
    let evalItem = state.evalib.evaluations.find(item => item.id === evalId);
    return {
        "evalItem": evalItem
    };
}

const mapStateToDispatch = (dispatch) => ({
    onAddChoiceQuestion: (evaluationId, question) => dispatch(addChoiceQuestion(evaluationId, question)),
    onUpdateChoiceQuestion: (evaluationId, question) => dispatch(updateChoiceQuestion(evaluationId, question))
})

const styledComponent = withStyles(styles)(EvaluationDetails);
export default connect(mapStateToProps, mapStateToDispatch)(styledComponent);