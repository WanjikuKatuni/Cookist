// component for popular foods

import React, { useState, useEffect } from 'react'
// component that has styling
import styled from 'styled-components';
// add carosel and splide styling
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
// add recipe component
import {Link} from "react-router-dom";


function Popular() {

    // get popular data
    const [popularData, setPopularData] = useState([]);
    
    
    useEffect(()=>{
        getPopularRecipes();
    }, []);


    function getPopularRecipes(){

        // check if popular is stored in local storage, if not it is setto local storage
        const check = localStorage.getItem('popular');

        if(check){
            setPopularData(JSON.parse(check));
        }
        else{
            fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=10`)
            .then((response)=>response.json())
            .then((data)=>{
                localStorage.setItem("popular", JSON.stringify(data.recipes));
                setPopularData(data.recipes)
                console.log(data.recipes)
            });
        }
    }

   


  return (
    <Wrapper>
        <h3>Popular recipes</h3>
        {/* spide for carousel - show 4 images per page*/}
        <Splide options={{
            perPage:4,
            // remove arrows
            arrows: false,
            // remove page
            pagination: false,
            drag:"free",
            gap:"5rem",

            }}>
        {/* looping over the list and output recipes */}
        {popularData.map((recipe)=>{
            return(
                <SplideSlide key={recipe.id}>

                <Card > 
                    {/* make each card a link */}
                    <Link to={`/recipe/${recipe.id}`}>
                        {/* lists all titles of the recipe */}
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}/>
                        <Gradient />
                    </Link>
                </Card>
                </SplideSlide>
            )
        })};
        </Splide>

    </Wrapper>
  )
}


// styles
const Wrapper = styled.div `
margin: 4rem 0rem;
`;

const Card = styled.div `
position: relative;
border-radius: 2rem;
min-height:2rem;
overflow: hidden;
border-color: #ca9b52;
border-style: solid;
border-width: 3px 3px 3px 3px;

img {
    border-radius: 2rem;
    postion: absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    left:50%;
    bottom:0%;
    z-index:10;
    transform:translate(-50%,0%);
    color: white;
    width: 50%;
    text-align:center;
    font-weight:800;
    font-size: 1.4rem;
    height:40%;
    display:flex;
    justify-conten: center;
    align-items:center;
    font-family: 'Chelsea Market', cursive;
}
`;

const Gradient = styled.div`
 z-index:3;
 position: absolute;
 width:100%;
 height:100%;
 background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;





export default Popular