import React from 'react';
import { Paper, Tabs, Tab, Typography, Grid, withStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { connect } from "react-redux";
import AddAction from './component/AddAction';
import ChoiceQuestionEditor from './component/ChoiceQuestionEditor';

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
    render() {
        const { classes, evalItem } = this.props;
        return (
            <Paper>
                <Typography variant="headline" align="center">{evalItem.description}</Typography>
                <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
                    <Tab label="写作" />
                    <Tab label="听力" />
                    <Tab label="阅读理解" />
                    <Tab label="翻译" />
                </Tabs>

                <Grid className={classes.pagerContainer} container>
                    {
                        evalItem.singleChoiceQuestions.map((questionItem, key) => {
                            return (
                                <Grid item key={key} xs={12} md={12} sm={12} className={classes.itemContainer}>
                                    <ChoiceQuestionEditor key={key} description={questionItem.description} options={questionItem.options} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <AddAction />
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

const styledComponent = withStyles(styles)(EvaluationDetails);
export default connect(mapStateToProps, null)(styledComponent);