import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
