import React from "react";
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const onClickHandler=()=>{

    }

    return(
        <div id="header">
            <img className="logo" src={logo} alt="Logo"/>
            <Button className="NavButton" variant="contained">Login</Button>
            <Link to="/BookShow">
                <Button className="NavButton" variant="contained" color="primary" onClick="onClickHandler">Book Show</Button>
            </Link>
        </div>
    );
}

export default Header;