import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import { Grid, Button, Paper, Tabs, Tab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import green from "@material-ui/core/colors/green";
import gray from "@material-ui/core/colors/grey";
import CreationOrEditDialog from "./component/CreationOrEditDialog";
import EvaluationItem from "./component/EvaluationItem";
import { connect } from "react-redux";
import { deleteEvaluation } from "actions/actions.js";

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
      showCreationOrEditDialog: false,
      evalItem: null,
    };
  }

  handleTabChange = (event, value) => {
    this.setState({ tabIndex: value });
  };

  handleAdd = () => {
    this.setState({ showCreationOrEditDialog: true, evalItem: null });
  }

  handleDialogClose = () => {
    this.setState({ showCreationOrEditDialog: false });
  }

  handleDelete = (id) => {
    this.props.onDelete(id);
  }

  handleEdit = (evalItem) => {
    this.setState({
      showCreationOrEditDialog: true,
      evalItem
    });
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
                <EvaluationItem
                  evalItem={item}
                  onDelete={() => this.handleDelete(item.id)}
                  onEdit={() => this.handleEdit(item)} />
              </GridItem>
            ))
          }
        </Grid>
        <Button variant="fab" className={this.props.classes.fab} onClick={this.handleAdd}>
          <AddIcon />
        </Button>
        <CreationOrEditDialog open={this.state.showCreationOrEditDialog}
          onClose={this.handleDialogClose}
          evalItem={this.state.evalItem} />
      </Paper>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    evaluationList: state.evalib.evaluations
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: (id) => dispatch(deleteEvaluation(id))
});

const styledComponent = withStyles(styles)(EvaluationList);
export default connect(mapStateToPros, mapDispatchToProps)(styledComponent);