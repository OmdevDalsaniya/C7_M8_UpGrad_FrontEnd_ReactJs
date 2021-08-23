import React, { useState } from "react";
import Header from './../../common/header/Header';

export default function Home(){

    const isLoggedIn = false;

    return(
        <Header auth={isLoggedIn}></Header>
    );
}