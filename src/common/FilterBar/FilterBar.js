import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Checkbox, Select, FormControlLabel, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    heading: {
        color: theme.palette.primary.light,
        fontSize: "2rem",
    },
    card: {
        margin: theme.spacing.unit,
        minWidth: "240px",
        maxWidth: "240px",
    },
    textField: {
        marginLeft: "2px",
        marginRight: "2px",
        width: 200,
    },
    formControl: {
        display: "flex",
        padding: "4px",
        margin: "auto",
        width: "100%",
    },
});

const FilterBar = (props) => {

    const { classes } = props;
    const [ genereList, setGenereList ] = useState([]);
    const [ artistList, setArtistList ] = useState([]);

    {/**TO be filtered values */}
    const [ movie, setMovie ] = useState("");    
    const [ genre, setGenre ] = useState([]);
    const [ artist, setArtist ] = useState([]);
    const [ releaseDate, setReleaseDate ] = useState("");

    async function loadGeneres() {
        const rawResponse = await fetch("http://localhost:8085/api/v1/genres")
        const data = await rawResponse.json();
        console.log(data);
        setGenereList(data.genres);
    }
    
    async function loadArtist() {
        const rawResponse = await fetch("http://localhost:8085/api/v1/artists?page=1&limit=30")
        const data = await rawResponse.json();
        console.log(data);
        setArtistList(data.artists);
    }   

    useEffect(()=>{
        loadGeneres();
        loadArtist();
    },[]);    

    const handleGenreChange = (e) => {
        console.log(e.target.value);
        const genereArray = genre;
        genereArray.push(e.target.value);
        setGenre(genereArray);
        console.log(genre);
    }
    
    const handleCheckChange = (e) => {
        e.target.checked = true;
        
    }

    const handleArtistChange = (e) => {
        console.log(e.target.value);
        const artistTempArray = artist;
        artistTempArray.push(e.target.value);
        setArtist(artistTempArray);
        console.log(artist);
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
                    <div className="filterFormat">
                        <FormControl className="formControl">
                            <TextField 
                                id="standard-basic"
                                labelId="movie-label"
                                label="Movie Name"
                                value={movie}
                                onInput={e => {
                                    setMovie(e.target.value)
                                    console.log(movie)
                                }}
                            />
                        </FormControl>
                    </div>
                    {/* GENRES START */}
                    <div className="filterFormat">
                        <FormControl className="formControl">
                            <InputLabel id="genre-label">Genres</InputLabel>
                            <Select
                                labelId="genre-label"
                                id="genre-select"
                                value={genre}
                                onChange={handleGenreChange}
                                label="Genres"
                                width="100%"
                            >
                            {
                                genereList.map((item) => (<MenuItem value={item.genre}>
                                    <FormControlLabel control={<Checkbox checked="false" name={item.genre} onClick={handleCheckChange}/>}
                                        label={item.genre} id={item.id}/>
                                </MenuItem>))
                            }
                            </Select>
                        </FormControl>
                    </div>
                    {/* ARTISE START */}
                    <div className="filterFormat">
                        <FormControl className="formControl">
                            <InputLabel id="artist-label">Artists</InputLabel>
                            <Select
                                labelId="artist-label"
                                id="artist-select"
                                value="Artists"
                                onChange={handleArtistChange}
                            >
                            {
                                artistList.map((item) => (
                                    <MenuItem value={`${item.first_name} ${item.last_name}`}>
                                        <FormControlLabel control={<Checkbox name={`${item.first_name} ${item.last_name}`} />}
                                            label={`${item.first_name} ${item.last_name}`} id={item.id}/>
                                    </MenuItem>
                                ))   
                            }
                            </Select>
                        </FormControl>
                    </div>
                    {/* RELEASE DATE START PICKER */}
                    <div className="filterFormat">
                        <FormControl className="formControl">
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
                        </FormControl>
                    </div>
                    {/* RELEASE DATE END PICKER */}
                    <div className="filterFormat">
                        <FormControl className="formControl">
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
                        </FormControl>
                    </div>
                    {/* APPLY BUTTON */}
                    <div className="filterFormat">
                        <FormControl required className="formControl">
                        <Button
                            variant="contained"
                            onClick={filterChangeHandler}
                            color="primary"
                        >
                            APPLY
                        </Button>
                        </FormControl>
                    </div>
                </CardContent>                
            </Card>
        </React.Fragment>
    );
}

FilterBar.prototype = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterBar);