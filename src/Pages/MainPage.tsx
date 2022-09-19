import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

const MainPage = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
    );
}

export default MainPage