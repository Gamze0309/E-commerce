import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../Components/ProductComponent';
import ProductList from '../Components/ProductList';
import LoginPage from './LoginPage';

const MainPage = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/home' element={<ProductList/>}/>
            <Route path='/product/:productTitle' element={<Product/>}/>
        </Routes>
    );
}

export default MainPage