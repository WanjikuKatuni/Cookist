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
    <DetailWrapper>
        {/* {recipeDetails.title} */}
        <div>
            <h2>{recipeDetails.title}</h2>
            <img src={recipeDetails.image} alt={recipeDetails.title}/>
        </div>
        <Info>
            <Button>
                Instructions
            </Button>
            <Button>
                Ingredients
            </Button>
        </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div `
    margin-top:10rem;
    margin-bottom: 5rem;
    display:flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2{
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;

    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    font-weight:600;
    border: 2px solid black;
    margin-right: 2rem;

`;

const Info= styled.div `
    margin-left:10rem;
`;

export default Recipe