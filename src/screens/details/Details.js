import React, { useState, useEffect } from "react";
import LoginRegisterModal from "../../common/loginModal/LoginRegisterModal";
import Header from './../../common/header/Header';
import YouTube from 'react-youtube';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { GridListTile, GridList, GridListTileBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import './Details.css';

const styles = () => ({
    set : {
        fill: "yellow",
    },
    unset : {
        fill: "grey",
    },
});

const Details = ({movieDetail}, props) => {
    const { classes } = props;
    const isLoggedIn = false;
    const [ posterUrl, setPosterUrl ] = useState("");
    const [ posterTitle, setPosterTitle ] = useState("");
    const [ genres, setGenres ] = useState("");
    const [ artists, setArtists ] = useState([]);
    const [ isPopOpen, setPopOpen ] = useState(false);
    const [ releaseDate, setReleaseDate ] = useState("");
    const [ youtubeURL, setYouTubeURL ] = useState("");

    {/*This Can be further Optimised */}
    const [ ratingState1, setRatingState1 ] = useState({ fill: "grey" });
    const [ ratingState2, setRatingState2 ] = useState({ fill: "grey" });
    const [ ratingState3, setRatingState3 ] = useState({ fill: "grey" });
    const [ ratingState4, setRatingState4 ] = useState({ fill: "grey" });
    const [ ratingState5, setRatingState5 ] = useState({ fill: "grey" });

    const loadmovie = () => {
        setPosterUrl(movieDetail.poster_url);
        setPosterTitle(movieDetail.title);
        setArtists(movieDetail.artists);

        const gen_string = movieDetail.genres.reduce((result, item ) => {
                return result+","+item
        });
        setGenres(gen_string);
        setReleaseDate(new Date(movieDetail.release_date).toDateString());
        setYouTubeURL(movieDetail.trailer_url);        
    }

    useEffect(()=>{
        loadmovie();
    },[]);

        return(
            <React.Fragment>
            <Header auth={isLoggedIn} handlePopUp={setPopOpen}></Header>
            { isPopOpen && 
                <LoginRegisterModal ></LoginRegisterModal>
            }
            {
                movieDetail==undefined &&
                    <Link to="/">
                        <Typography className="back">&#60; Back to Home</Typography>
                    </Link>    
            }
            <div className="backToHome">
                <Link to="/">
                    <Typography className="back">&#60; Back to Home</Typography>
                </Link>
            </div>
            <div className="parent">
                <div className="first">
                    <img src={posterUrl} alt={posterTitle} className="imgClass"/>
                </div>
                <div className="second">
                    <div className="part">
                        <Typography variant="h2">{posterTitle}</Typography>
                    </div>
                    <div className="part">
                        <p><strong>Genres :</strong>{genres}<br/>
                        <strong>Duration :</strong>{movieDetail.duration}<br/>
                        <strong>Release Date :</strong>{releaseDate}<br/>
                        <strong>Rating :</strong>{movieDetail.rating}<br/></p>
                    </div>
                    <div className="part">
                        <p className="para"><strong>Plot :</strong>{movieDetail.storyline}</p>
                    </div>
                    <div className="part">
                        <p><strong>Trailer :</strong></p>
                    </div>
                    <div className="part">
                        <YouTube videoId={youtubeURL} className="youTubePanel"/>
                    </div>
                </div>
                <div className="third">
                    <div className="tpart">
                        <p><strong>Rate This movie :</strong></p>
                        <div>
                            <StarBorderIcon
                                name="half-rating-read"
                                onClick={ () => ratingState1.fill == "grey" ? setRatingState1({fill:"yellow"}) : setRatingState1({fill:"grey"}) }
                                style={ratingState1}
                            />
                            <StarBorderIcon
                                name="half-rating-read"
                                onClick={ () => ratingState2.fill == "grey" ? setRatingState2({fill:"yellow"}) : setRatingState2({fill:"grey"}) }
                                style={ratingState2}
                            />
                            <StarBorderIcon
                                name="half-rating-read"
                                onClick={ () => ratingState3.fill == "grey" ? setRatingState3({fill:"yellow"}) : setRatingState3({fill:"grey"}) }
                                style={ratingState3}
                            />
                            <StarBorderIcon
                                name="half-rating-read"
                                onClick={ () => ratingState4.fill == "grey" ? setRatingState4({fill:"yellow"}) : setRatingState4({fill:"grey"}) }
                                style={ratingState4}
                            />
                            <StarBorderIcon
                                name="half-rating-read"
                                onClick={ () => ratingState5.fill == "grey" ? setRatingState5({fill:"yellow"}) : setRatingState5({fill:"grey"}) }
                                style={ratingState5}
                            />
                        </div>
                    </div>
                    <div className="tpart">
                        <p><strong>Artists :</strong></p>
                        <GridList
                            spacing={3}
                            cols={2}
                            height="350px"
                            className="release_grid"
                        >
                            { 
                                artists.map((item) => (
                                    <GridListTile key={item.id}
                                        title={item.title}
                                        className="artistGrid"
                                    >
                                        <img src={item.profile_url} alt={item.first_name} className="imgClass"/>
                                        <GridListTileBar 
                                            title={item.first_name}
                                        />
                                    </GridListTile>
                                ))
                            }
                        
                        </GridList>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
}

Details.prototype = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Details);