import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import{Link, useParams} from "react-router-dom"


function Cuisine() {

    const [cuisineType, setCusineType]=useState([]);
    let params = useParams();


    useEffect(()=>{
        getCusineType(params.type)
        console.log(params.type)
    },[params.type]);


    function getCusineType(name){
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&cuisine=${name}`)
        .then((response)=>response.json())
        .then((recipes)=>{
            setCusineType(recipes.results)
            console.log(recipes.results)
        });
    }



  return (
    <div>Cuisine</div>
  )
}

export default Cuisine