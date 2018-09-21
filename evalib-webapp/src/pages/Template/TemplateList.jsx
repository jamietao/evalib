import React from 'react';
import {
    Paper, Grid, Card, CardHeader, CardContent,
    Avatar, Typography, withStyles, Tabs, Tab,
    Collapse, CardActions, IconButton
} from '@material-ui/core';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import grey from "@material-ui/core/colors/grey";
import face from "assets/img/faces/marc.jpg";

const styles = theme => ({
    pagerContainer: {
        padding: theme.spacing.unit,
        backgroundColor: grey[100],
    },
    templateItem: {
    }
});

class TemplateList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.pagerContainer}>
                <Grid container spacing={16}>
                    <Grid item xs={6} md={6} sm={12}>
                        <Card className={classes.templateItem}>
                            <CardHeader
                                avatar={<Avatar aria-label="Recipe" src={face} />}
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016" />
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={6} sm={12}>
                        <Card className={classes.templateItem}>
                            <CardHeader
                                avatar={<Avatar aria-label="Recipe" src={face} />}
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016" />
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={6} sm={12}>
                        <Card className={classes.templateItem}>
                            <CardHeader
                                avatar={<Avatar aria-label="Recipe" src={face} />}
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016" />
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={6} sm={12}>
                        <Card className={classes.templateItem}>
                            <CardHeader
                                avatar={<Avatar aria-label="Recipe" src={face} />}
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016" />
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(TemplateList);