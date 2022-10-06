// component for popular foods

import React, { useState, useEffect } from 'react'



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
    <div>
        <h3>Popular recipes</h3>
        {/* looping over the list and output recipes */}
        {popularData.map((recipe)=>{
            return(
                <div key={recipe.id}> 
                    
                    {/* lists all titles of the recipe */}
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
            )
        })};

    </div>
  )
}

export default Popular