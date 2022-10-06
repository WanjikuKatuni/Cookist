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
            console.log(data.recipes)
            setPopularData(data.recipes)
        });
    }

   


  return (
    <div>
        Popular

        {/* looping over the list and output recipes */}
        {popularData.map((recipe)=>{
            return(
                <div key={recipe.id}> 
                    <p>{recipe.title}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Popular