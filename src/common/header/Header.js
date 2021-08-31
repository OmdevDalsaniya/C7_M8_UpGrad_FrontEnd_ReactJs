import React from "react";
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({history, handlePopUp, isLoggedIn}, props) => {
    return(
        <div id="header">
            <img className="logo" src={logo} alt="Logo"/>
            {(isLoggedIn) ?
                <Button className="NavButton" variant="contained">Log Out</Button>
                :
                <Button className="NavButton" variant="contained" onClick={()=> handlePopUp(true)}>Log In</Button>
            }
            <Link to="/BookShow">
                <Button className="NavButton" variant="contained" color="primary" onClick="onClickHandler">Book Show</Button>
            </Link>
        </div>
    );
}

export default Header;