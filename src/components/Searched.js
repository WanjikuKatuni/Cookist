import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
    <Grid>
      {/* loop over results to give a list of searched items in a grid */}
      {searchedRecipes.map((item)=>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div `
    display:grid;
    grid-gap:3rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

`;

const Card = styled.div`
 img{
    width: 100%;
    border-radius:2rem;

 }
 a{
    text-decoration: none;
 }
 h4{
    text-align:center;
    padding: 1rem;
 }
`;



export default Searched