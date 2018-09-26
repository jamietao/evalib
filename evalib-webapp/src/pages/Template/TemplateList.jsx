import React from 'react';
import { Paper, Grid, withStyles, Typography, Icon } from '@material-ui/core';

import grey from "@material-ui/core/colors/grey";
import TemplateItem from './components/TemplateItem';
import { connect } from "react-redux";

const styles = theme => ({
    pagerContainer: {
        padding: theme.spacing.unit,
        backgroundColor: grey[100],
    },
    iconButton: {
        margin: 0,
        marginLeft: 8,
        width: 30,
        height: 30
    },
});

class TemplateList extends React.Component {
    constructor(props) {
        super(props);

        let templateListCopy = JSON.parse(
            JSON.stringify(this.props.templateList));
        this.state = {
            templateList: templateListCopy
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.pagerContainer}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12} sm={12}>
                        {
                            this.state.templateList ?
                                this.state.templateList.map(item => {
                                    return (
                                        <TemplateItem templateData={item} key={item.id} />
                                    );
                                }) :
                                (
                                    <React.Fragment>
                                        <Typography style={{ marginTop: "42px", marginBottom: '42px', color: 'grey' }}
                                            paragraph variant="button" align="center" color="textPrimary">
                                            <Icon style={{ fontSize: 24, marginRight: "12px" }}>warning</Icon>
                                            There is no template available, please add template.
                                        </Typography>
                                    </React.Fragment>
                                )
                        }
                    </Grid>
                </Grid>
            </Paper >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        templateList: state.evalib.templates
    };
};

const StyledComponent = withStyles(styles)(TemplateList);
export default connect(mapStateToProps, null)(StyledComponent); 