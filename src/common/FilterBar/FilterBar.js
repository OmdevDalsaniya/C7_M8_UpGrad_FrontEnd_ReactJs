import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Checkbox, Select, FormControlLabel, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    heading: {
        color: theme.palette.primary.light,
    },
    card: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: "2px",
        marginRight: "2px",
        width: 200,
    }
});

const FilterBar = (props) => {

    const { classes } = props;
    const [ movie, setMovie ] = useState("");
    const [ genere, setGenere ] = useState("");
    const [ artist, setArtist ] = useState("");
    const [ releaseDate, setReleaseDate ] = useState("");

    const value="Temp";

    const handleGenreChange = () => {
        console.log("Handle Genre Change");
    }
    
    const handleCheckChange = () => {
        console.log("Handle Check Change");
    }

    const handleArtistChange = () => {
        console.log("Artist Check Change");
    }

    const filterChangeHandler = () => {
        console.log("Filter Change Handler");
    }

    return(
        <React.Fragment>
            <Card
                variant="outlined"
                className={classes.card}
            >
                <CardContent>
                <CardHeader className={classes.heading} title="FIND MOVIES BY:"></CardHeader>
                    {/* MOVIE FILTER */}
                    <FormControl required className="formControl">
                        <InputLabel id="genre-label">Movie Name</InputLabel>
                        <TextField id="standard-basic" label="Movie Name" />
                    {/* GENRES START */}
                        <InputLabel id="genre-label">Genres</InputLabel>
                        <Select
                            labelId="Genres"
                            id="genre-select"
                            value="Genre"
                            onChange={handleGenreChange}
                        >
                        <MenuItem value={10}>
                            <FormControlLabel control={<Checkbox checked="10" onChange={handleCheckChange} name="Ten" />}
                                label="Ten"/>
                        </MenuItem>
                        <MenuItem value={20}>
                            <FormControlLabel control={<Checkbox checked="20" onChange={handleCheckChange} name="Twenty" />}
                                label="Twenty"/>
                        </MenuItem>
                        </Select>
                    {/* ARTISE START */}
                        <InputLabel id="artist-label">Artists</InputLabel>
                        <Select
                            labelId="Artists"
                            id="artist-select"
                            value="Artists"
                            onChange={handleArtistChange}
                        >
                        <MenuItem value={10}>
                            <FormControlLabel control={<Checkbox checked="10" onChange={handleCheckChange} name="Ten" />}
                                label="Ten"/>
                        </MenuItem>
                        <MenuItem value={20}>
                            <FormControlLabel control={<Checkbox checked="20" onChange={handleCheckChange} name="Twenty" />}
                                label="Twenty"/>
                        </MenuItem>
                        </Select>
                    {/* RELEASE DATE START PICKER */}
                        <TextField
                                id="start-date"
                                label="Release Date Start"
                                type="date"
                                defaultValue="dd-mm-yyyy"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                        />
                    {/* RELEASE DATE END PICKER */}
                        <TextField
                                id="end-date"
                                label="Release Date End"
                                type="date"
                                defaultValue="dd-mm-yyyy"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                        />
                    <Button
                        variant="contained"
                        onClick={filterChangeHandler}
                        color="primary"
                    >
                        APPLY
                    </Button>
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