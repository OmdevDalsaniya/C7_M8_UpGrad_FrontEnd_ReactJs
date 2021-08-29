import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, FormControl, InputLabel } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
    heading: {
        color: theme.palette.primary.light,
    },
    card: {
        margin: theme.spacing.unit,
    }
});

const FilterBar = (props) => {

    const { classes } = props;

    return(
        <React.Fragment>
            <Card
                variant="outlined"
                className={classes.card}
            >
                <CardContent>
                <CardHeader title="FIND MOVIES BY:" className={classes.heading}/>
                    <FormControl required className="formControl">
                    <InputLabel 
                        id="MovieName"
                        label="Movie Name"
                        name="movieName"
                    />
                    </FormControl>
                </CardContent>                
            </Card>
        </React.Fragment>
    );
}

FilterBar.prototype = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterBar);