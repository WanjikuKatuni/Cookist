import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Searched() {

  // setState
  const [searchedRecipes, setSearchedRecipes]=useState([]);
  const params= useParams();


  useEffect(()=>{
    getSearchedRecipe(params.search);
  },[params.search])

  // fetch searched recipe
  function getSearchedRecipe(name){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}`)
    .then((response)=>response.json())
    .then((recipes)=>{
      setSearchedRecipes(recipes.results)
        console.log(recipes.results)
    });
}



  return (
    <div>Searched</div>
  )
}

export default Searched