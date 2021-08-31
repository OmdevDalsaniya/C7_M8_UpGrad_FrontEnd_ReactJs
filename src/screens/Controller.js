import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import BookShow from '../screens/bookshow/BookShow';
import Details from '../screens/details/Details';
import FilterBar from "../common/FilterBar/FilterBar";

const Controller = () => {

    const [ movieDetail, setMovieDetail ] = useState([]);
    const [ isLoggedIn, setLoggedIn ] = useState(false);


    const baseUrl = "http://localhost:8085/api/v1";
    return(
        <Router>
            <div>
                {/* <Route exact path="/" render={(props) => <Home {...props} /> } /> */}
                <Route exact path="/" render={({history}, props) => <Home history={history} {...props} isLoggedIn={isLoggedIn} setLoggedIn={isLoggedIn}/> } />
                <Route exact path="/BookShow" render={({history}, props) => <BookShow history={history} {...props} />} />
                <Route exact path="/Movie" render={(props) =><Details {...props} movieDetail={movieDetail}/>}/>
            </div>
        </Router>

    );
}

export default Controller;