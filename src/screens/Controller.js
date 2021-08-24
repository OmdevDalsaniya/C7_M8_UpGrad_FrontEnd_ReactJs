import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import BookShow from '../screens/bookshow/BookShow';
import LoginRegister from '../common/loginModal/LoginRegisterModal';

const Controller = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" render={() => <Home /> } />
                <Route exact path="/BookShow" render={(props) => <BookShow {...props} />} />
                <Route exact path="/Movie" render={() =><Home/>}/>
            </div>
        </Router>

    );
}

export default Controller;