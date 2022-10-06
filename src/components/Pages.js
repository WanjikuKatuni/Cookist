import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
// routing
import {Route, Routes} from "react-router-dom";



function Pages() {
  return (
      <Routes>
        {/* define multiple route components to lead to different destinations */}
          <Route path="/" element={<Home />}/>
          <Route path="/cuisine/:type" element={<Cuisine />}/>
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipe/:id" element={<Recipe />}/>

      </Routes>

  )
}

export default Pages