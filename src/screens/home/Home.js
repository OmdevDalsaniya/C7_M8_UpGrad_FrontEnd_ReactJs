import React, { useState } from "react";
import LoginRegisterModal from "../../common/loginModal/LoginRegisterModal";
import Header from './../../common/header/Header';
import './Home.css';

export default function Home(){

    const isLoggedIn = false;
    const [isPopOpen, setPopOpen] = useState(false);

    return(
        <React.Fragment>
        <Header auth={isLoggedIn} handlePopUp={setPopOpen}></Header>
        { isPopOpen && 
            <LoginRegisterModal ></LoginRegisterModal>
        }
        <div className="subHeader">
            <p>UpComing Movies</p>
        </div>
        </React.Fragment>
    );
}