import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

function Recipe() {

    const params = useParams();
    const [recipeDetails, setRecipeDetails]=useState({});

    useEffect(()=>{
        getRecipeDetails();
    },[params.name])

    function getRecipeDetails(){
        fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`)
        .then((response)=>response.json())
        .then((detailsData)=>{
            setRecipeDetails(detailsData)
            console.log(detailsData)
    });
    }




  return (
    <div>Recipe</div>
  )
}

export default Recipe