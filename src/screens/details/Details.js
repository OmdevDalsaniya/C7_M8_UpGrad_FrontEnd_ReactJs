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

const styles = (theme) => ({
    set : {
        fill: "yellow",
    },
});

const Details = ({movieDetail}, props) => {
    const { classes } = props;
    const isLoggedIn = false;
    const [ poster_url, setPoster_Url ] = useState("");
    const [ poster_title, setPoster_title ] = useState("");
    const [ artist, setArtist ] = useState([]);
    const [ isPopOpen, setPopOpen ] = useState(false);

    const loadmovie = () => {
        setPoster_Url("https://upload.wikimedia.org/wikipedia/en/c/cd/Shahid_Poster_%282013%29.jpg"),
        setPoster_title("Shahid")
        console.log(movieDetail);
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
        <div className="backToHome">
            <Link to="/">
                <Typography className="back">&#60; Back to Home</Typography>
            </Link>
        </div>
        <div className="parent">
            <div className="first">
                <img src={poster_url} alt={poster_title} className="imgClass"/>
            </div>
            <div className="second">
                <div className="part">
                    <Typography variant="h2">{poster_title}</Typography>
                </div>
                <div className="part">
                    <p><strong>Genres :</strong>"Genres"<br/>
                    <strong>Duration :</strong>"Duration"<br/>
                    <strong>Release Date :</strong>"Release Date"<br/>
                    <strong>Rating :</strong>"Rating"<br/></p>
                </div>
                <div className="part">
                    <p><strong>Plot :</strong>"Plot"</p>
                </div>
                <div className="part">
                    <p><strong>Trailer :</strong></p>
                </div>
                <div className="part">
                <YouTube videoId="https://www.youtube.com/watch?v=S0WX61pgEEA&list=PLBIpo3Esr0QZyhUsqOAwhaZUKbf9zkFNs" margin="16px" />
                </div>
            </div>
            <div className="third">
                <div className="part">
                <StarBorderIcon
                    name="half-rating-read"
                    
                    style = {{
                        fill: "yellow",
                    }}
                />
                <StarBorderIcon
                    name="half-rating-read" 
                />
                <StarBorderIcon
                    name="half-rating-read" 
                />
                <StarBorderIcon
                    name="half-rating-read" 
                />
                <StarBorderIcon
                    name="half-rating-read" 
                />
                </div>
                <div className="part">
                <GridList
                    spacing={3}
                    cols={2}
                    height="350px"
                    className="release_grid"
                >
                    {/* Add a Grid List Tile */}
                
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

export default Details;