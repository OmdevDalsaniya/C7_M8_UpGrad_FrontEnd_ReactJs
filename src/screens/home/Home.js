import React, { useState, useEffect } from "react";
import LoginRegisterModal from "../../common/loginModal/LoginRegisterModal";
import FilterBar from './../../common/FilterBar/FilterBar';
import Header from './../../common/header/Header';
import { GridListTile, GridList, GridListTileBar } from '@material-ui/core';
import './Home.css';

export default function Home({history, setMovieDetail}){
    const isLoggedIn = false;
    const [ isPopOpen, setPopOpen ] = useState(false);
    const [ movieList, setMovieList ] = useState([]);
    const [ releasedList, setReleasedList ] = useState([]);
    const [ upcomingList, setUpcomingList ] = useState([]);
       

    async function loadmovie() {
        const rawResponse = await fetch("http://localhost:8085/api/v1/movies?page=1&limit=20")
        const data = await rawResponse.json();
        setMovieList(data.movies);
        setReleasedList(data.movies.filter(item => item.status == "RELEASED"));
        setUpcomingList(data.movies.filter(item => item.status == "PUBLISHED"));
    }   

    useEffect(()=>{
        loadmovie();
    },[]);

    const onClickReleasedMovie = (movie) => {
        console.log(movie);
        setMovieDetail(movie);
        history.push("/Movie");
    }
          

    // Use this variable to store the value of incoming request
    return(
        <React.Fragment>
        <Header auth={isLoggedIn} handlePopUp={setPopOpen}></Header>
        { isPopOpen && 
            <LoginRegisterModal ></LoginRegisterModal>
        }
        <div className="subHeader">
            <p>UpComing Movies</p>
        </div>
        {/* console.log(movieList[0]) */}
        { console.log(releasedList) }
        { console.log(upcomingList) }

        {/* UPCOMING MOVIE DIV */}
        <div className="rootNew">
            <GridList
                spacing={6}
                cols={6}
                height={250}
                className="gridListNew"
            >
            {        
                upcomingList.map((item) => (
                    <GridListTile key={item.id}
                        title={item.title}
                        className="movieGrid"
                    >
                        <img src={item.poster_url} alt={item.title} className="imgClass"/>
                        <GridListTileBar title={item.title} />
                    </GridListTile> 
                ))
            } 
            </GridList>
        </div>

        {/* RELEASED MOVIE DIV */}
        <div className="separator">
            <div className = "released">
                <GridList
                    spacing={3}
                    cols={4}
                    height="350px"
                    className="release_grid"
                >
                {        
                    releasedList.map((item) => (
                        <GridListTile key={item.id}
                            title={item.title}
                            className="movieGrid clickGrid"
                            onClick={() => onClickReleasedMovie(item)}
                        >
                            <img src={item.poster_url} alt={item.title} className="imgClass"/>
                            <GridListTileBar title={item.title} subtitle={item.release_date}/>
                        </GridListTile>
                    ))
                }
                </GridList>
            </div>
            <div className = "filterSide">
                <FilterBar />
            </div>
        </div>
        </React.Fragment>
    );
}