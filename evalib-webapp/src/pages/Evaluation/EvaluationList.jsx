import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import { Grid, Zoom, Button, Paper, Tabs, Tab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import green from "@material-ui/core/colors/green";
import gray from "@material-ui/core/colors/grey";
import CreationDialog from "./component/CreationDialog";
import EvaluationItem from "./component/EvaluationItem";
import { connect } from "react-redux";

const styles = theme => ({
  evalContainer: {
    padding: theme.spacing.unit * 2,
    backgroundColor: gray[100],
  },

  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    color: theme.palette.common.white,
    backgroundColor: green[500]
  }
});

class EvaluationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      showCreationDialog: false
    };
  }

  handleTabChange = (event, value) => {
    this.setState({ tabIndex: value });
  };

  handleAdd = () => {
    this.setState({ showCreationDialog: true });
  }

  handleDialogClose = () => {
    this.setState({ showCreationDialog: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <Tabs indicatorColor="primary" textColor="primary" centered
          value={this.state.tabIndex} onChange={this.handleTabChange}>
          <Tab label="All" />
          <Tab label="Published" />
        </Tabs>
        <Grid container className={classes.evalContainer}>
          {
            this.props.evaluationList.map((item, index) => (
              <GridItem xs={6} sm={12} md={6} key={index}>
                <EvaluationItem evalItem={item} />
              </GridItem>
            ))
          }
        </Grid>
        <Button variant="fab" className={this.props.classes.fab} onClick={this.handleAdd}>
          <AddIcon />
        </Button>
        <CreationDialog open={this.state.showCreationDialog} onClose={this.handleDialogClose} />
      </Paper>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    evaluationList: state.evalib.evaluations
  }
};

const styledComponent = withStyles(styles)(EvaluationList);
export default connect(mapStateToPros, null)(styledComponent);