import React from 'react';
import HomePage from './utils/pages/home-page/HomePage';
import { Route, Routes } from 'react-router-dom';
const App = () => {
    return (
     <Routes>
      <Route path='/' element={<HomePage/>} />
     </Routes>
    );
  }


export default App;