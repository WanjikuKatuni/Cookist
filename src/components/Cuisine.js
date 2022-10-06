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
    // list all items that match particular cuisine
    <Grid>
        {cuisineType.map((item)=>{
            return(
                <Card key={item.id}>
                    {/* make card be an active link */}
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Link>

                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled(motion.div) `
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
export default Cuisine