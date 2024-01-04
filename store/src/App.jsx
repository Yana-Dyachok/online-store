import React from 'react';
import HomePage from './utils/pages/home-page/HomePage';
import Cart from './utils/pages/cart/Cart';
import { Route, Routes } from 'react-router-dom';
const App = () => {
    return (
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>
    );
  }


export default App;