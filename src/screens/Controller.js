import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import BookShow from '../screens/bookshow/BookShow';
import FilterBar from "../common/FilterBar/FilterBar";

const Controller = () => {

    const baseUrl = "http://localhost:8085/api/v1";
    return(
        <Router>
            <div>
                {/* <Route exact path="/" render={(props) => <Home {...props} /> } /> */}
                <Route exact path="/" render={(props) => <Home {...props} /> } />
                <Route exact path="/BookShow" render={(props) => <BookShow {...props} />} />
                <Route exact path="/Movie" render={(props) =><Home {...props}/>}/>
            </div>
        </Router>

    );
}

export default Controller;