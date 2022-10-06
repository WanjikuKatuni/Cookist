// component for vegan foods

import React, { useState, useEffect } from 'react'
// component that has styling
import styled from 'styled-components';
// add carosel and splide styling
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";



function Vegan() {

  // get vegan data
  const [veganData, setVeganData] = useState([]);
      
      
  useEffect(()=>{
      getVeganRecipes();
  }, []);


  function getVeganRecipes(){

      // check if vegan recipes is stored in local storage, if not it is setto local storage
      const check = localStorage.getItem('vegan');

      if(check){
          setVeganData(JSON.parse(check));
      }
      else{
          fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=10&tags=vegan`)
          .then((response)=>response.json())
          .then((data)=>{
              localStorage.setItem("vegan", JSON.stringify(data.recipes));
              setVeganData(data.recipes)
              console.log(data.recipes)
          });
      }
  }




  return (
    <Wrapper>
    <h3>Vegan recipes</h3>
    {/* spide for carousel - show 4 images per page*/}
      <Splide options={{
          perPage:3,
          // remove arrows
          arrows: false,
          // remove page
          pagination: false,
          drag:"free",
          gap:"5rem",

          }}>
      {/* looping over the list and output recipes */}
      {veganData.map((recipe)=>{
          return(
              <SplideSlide key={recipe.id}>
              <Card > 
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
p{
    position:absolute;
    left:50%;
    bottom:0%;
    z-index:10;
    transform:translate(-50%,0%);
    color: white;
    width: 100%;
    text-align:center;
    font-weight:600;
    font-size: 1rem;
    height:40%;
    display:flex;
    justify-conten: center;
    align-items:center;
}
`;

const Gradient = styled.div`
 z-index:3;
 position: absolute;
 width:100%;
 height:100%;
 background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;




export default Vegan