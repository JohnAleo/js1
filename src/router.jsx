import React from 'react';
import {BrowseRouter,Routes,Route} from "react-router-dom";

import Navbar from './navbar';
import HomeComponent from './home';

const RouterComponent = () => {
  return (
    
    <BrowseRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
    </Routes>
    </BrowseRouter>
  )
}

export default RouterComponent