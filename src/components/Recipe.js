import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

function Recipe() {

    const params = useParams();
    const [recipeDetails, setRecipeDetails]=useState({});

    useEffect(()=>{
        getRecipeDetails();
    },[params.id]);

    function getRecipeDetails(){
        fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`)
        .then((response)=>response.json())
        .then((recipeDetailsData)=>{
            setRecipeDetails(recipeDetailsData)
            console.log(recipeDetailsData)
    });
    }




  return (
    <div>
        {recipeDetails.title}
    </div>
  )
}

export default Recipe