import React, { useState, useEffect } from "react";
import './Details.css';

const Details = () => {
    return(
        <React.Fragment>
        <Header auth={isLoggedIn} handlePopUp={setPopOpen}></Header>
        { isPopOpen && 
            <LoginRegisterModal ></LoginRegisterModal>
        }
        <div className="backToHome">
            <p><a>Back to Home</a></p>
        </div>
        </React.Fragment>
    );
}

export default Details;