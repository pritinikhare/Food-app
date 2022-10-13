import React from 'react'
import { useState } from 'react';
import {useParams, Link} from 'react-router-dom'

let vId ="";
const RecipeInfo = () => {
    const [item,setItem] = useState();
    // const [show, setShow ]= useState(false);
    const {MealId} = useParams();
    if(MealId!=="" )
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.meals[0]);
            setItem(data.meals[0]);
        })
    }
    
    if(item){
        const url =item.strYoutube
        const str = url.split("=");
        vId=str[str.length-1];
    }
  return (
    <>
        <div className="back">
            <button className='backBtn'>
                <Link to='/' style={{color:'orangered'}}> &#8249;&#8249; Back</Link>
            </button>
        </div>
        {
            (!item)?"": (<>
            
                
                <div className="content">
                    <img src={item.strMealThumb} alt="foodImage" />
                    <div className="innerContent">
                        <h1>{item.strMeal}</h1>
                        <h2>{item.strArea} Food</h2>
                        <h3>Category : {item.strCategory}</h3>      
                    </div>
                </div>
                
                <div className="recipeDetail">
                    <div className="ingredients">
                        <h2>Ingredients</h2><br />
                        <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
                        <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                        <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                        <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                        <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
                        <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
                        <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
                        <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
                    </div>
                    <div className="instruction">
                        <h2>Instruction</h2><br />
                        <h4>{item.strInstructions}</h4>
                    </div>
                    
                
                    
                </div>
                <div className="vedio">
                        <iframe src={`https://www.youtube.com/embed/${vId}`}>

                        </iframe>
                    </div>
            </>)
        }
    </>
  )
}

export default RecipeInfo
