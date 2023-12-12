import React from 'react';
import HomePage from './utils/pages/home-page/HomePage'
import OpenedCart from './utils/components/cart/OpenedCart'
import { Route, Routes } from 'react-router-dom';
const App = () => {
    return (
     <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/cart' element={<OpenedCart/>} /> */}
     </Routes>
    );
  }


export default App;
