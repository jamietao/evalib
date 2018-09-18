import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Button, Avatar } from '@material-ui/core';
import { RadioGroup, Radio, Typography, FormControlLabel } from "@material-ui/core";
import { withStyles, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { grey, yellow, green } from "@material-ui/core/colors";

const style = theme => ({
    expansionPanel: {
    },

    avartarGreen: {
        height: 20,
        width: 20,
        backgroundColor: green[500]
    },

    expansionHeader: {
        backgroundColor: yellow[100],
    },

    expansionBody: {
        backgroundColor: grey[100]
    }
});

class QuestionItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correctAnswer: this.props.questionItem && this.props.questionItem.correctAnwer
        };
    }

    handleOptionClicked = (e) => {
        this.setState({
            correctAnswer: e.target.value
        });
    }

    render() {
        const { classes, questionItem, defaultExpanded } = this.props;
        return (
            <ExpansionPanel defaultExpanded={defaultExpanded} >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container>
                        <Grid item md>
                            <Typography>{questionItem.description}</Typography>
                        </Grid>
                        <Grid item>
                            {
                                questionItem.correctAnswer ? (
                                    <Avatar className={classes.avartarGreen}>
                                        {questionItem.correctAnswer}
                                    </Avatar>
                                ) : (<div></div>)
                            }
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionBody}>
                    <RadioGroup value={this.state.correctAnswer} onChange={this.handleOptionClicked}>
                        {
                            questionItem.options.map((option) => {
                                return (
                                    <FormControlLabel key={option.label}
                                        value={option.label}
                                        label={`${option.label}. ${option.description}`}
                                        control={<Radio />} />
                                );
                            })
                        }
                    </RadioGroup>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button size="small" color="primary">Edit</Button>
                    <Button size="small" color="secondary">Cancel</Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        );
    }
}

export default withStyles(style)(QuestionItem);