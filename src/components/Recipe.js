import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

function Recipe() {

    const params = useParams();
    const [recipeDetails, setRecipeDetails]=useState({});
    // 
    const [activeButton, setActiveButton] = useState('instructions')

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
            <Button className={activeButton === 'instructions'? 'active':''} onClick={()=> setActiveButton("instructions")}>
                Instructions
            </Button>
            <Button className={activeButton === 'ingredients'? 'active':''} onClick={()=> setActiveButton("ingredients")}>
                Ingredients
            </Button>
            {activeButton === 'instructions' && (
                
            // prevent html tags from showing in the data 
            <div>
                <h5 dangerouslySetInnerHTML={{__html:recipeDetails.summary}}></h5>
                <h6  dangerouslySetInnerHTML={{__html:recipeDetails.instructions}}></h6>
            </div>
            )}
            {activeButton === 'ingredients' &&(
            // render ingredients array 
            <ul>
                {recipeDetails.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div `
    margin-top:10rem;
    margin-bottom: 5rem;
    display:flex;
    .active{
        background: linear-gradient(35deg, #ca9b52, #ffcc80);
        color: black;
    }

    h2{
        margin-bottom: 2rem;
        color:#5f4339;
        padding-left: 2rem;
        font-family: 'Chelsea Market', cursive;

    }
    img{
        padding-left: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
        font-family: 'Life Savers', cursive;

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
    border: 2px solid #ca9b52;
    margin-right: 2rem;

`;

const Info= styled.div `
    margin-left:10rem;
`;

export default Recipe