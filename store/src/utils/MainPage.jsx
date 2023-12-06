import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
const MainPage=()=> {
    return (
        <div className="main-page wrapper">
            <Header />
            <Main/>
            <Footer/>
        </div>
    );
}

export default MainPage;