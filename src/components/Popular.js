// component for popular foods

import React, { useState, useEffect } from 'react'
// component that has styling
import styled from 'styled-components';
// add carosel and splide styling
import { Splide, SplideSide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";


function Popular() {

    // get popular data
    const [popularData, setPopularData] = useState([]);
    
    
    useEffect(()=>{
        getPopularRecipes();
    }, []);


    function getPopularRecipes(){

        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=10`)
        .then((response)=>response.json())
        .then((data)=>{
            setPopularData(data.recipes)
            console.log(data.recipes)
        });
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
                <SplideSlide>
                <Card key={recipe.id}> 
                    
                    {/* lists all titles of the recipe */}
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
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
broder-radius: 2rem;
min-height:2rem;
overflow: hidden;

img {
    border-radius: 2rem;
    postion: absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
`;



export default Popular