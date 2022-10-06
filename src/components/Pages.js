import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';
// routing
import {Route, Routes, useLocation} from "react-router-dom";



function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {/* define multiple route components to lead to different destinations */}
          <Route path="/" element={<Home />}/>
          <Route path="/cuisine/:type" element={<Cuisine />}/>
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipe/:id" element={<Recipe />}/>

      </Routes>
    </AnimatePresence>

  )
}

export default Pages