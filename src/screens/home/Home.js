import React, { useState } from "react";
import LoginRegisterModal from "../../common/loginModal/LoginRegisterModal";
import Header from './../../common/header/Header';

export default function Home(){

    const isLoggedIn = false;
    const [isPopOpen, setPopOpen] = useState(false);

    return(
        <React.Fragment>
        <Header auth={isLoggedIn} handlePopUp={setPopOpen}></Header>
        { isPopOpen && 
            <LoginRegisterModal ></LoginRegisterModal>
        }
        </React.Fragment>
    );
}