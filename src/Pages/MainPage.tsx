import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from '../Components/HeaderComponent';
import Product from '../Components/ProductComponent';
import ProductList from '../Components/ProductList';
import LoginPage from './LoginPage';
import ShoppingCartList from '../Components/ShoppingCartList';

const MainPage = () => {

    return(
        <Routes>
            <Route path='/' element={<><LoginPage/></>}/>
            <Route path='/home' element={<><HeaderComponent/><ProductList/></>}/>
            <Route path='/product/:productId' element={<><HeaderComponent/><Product/></>}/>
            <Route path='/shoppingCart' element={<><HeaderComponent/><ShoppingCartList/></>}/>
        </Routes>
    );
}

export default MainPage