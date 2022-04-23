import React from "react";
//import './Components/style.css';
import './style.css';
const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="card">
                        <div className ="info">
                        <h2>Dish Name :{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb} alt="meal name"/>
                            <a href={getMeal.data.strYoutube}>Watch video</a>
                            <h2>Tags :{getMeal.data.strTags}</h2><br></br>
                            <h2>Ingredients :</h2>
                            <h2>{getMeal.data.strIngredient1}--{getMeal.data.strMeasure1}</h2>
                            <h2>{getMeal.data.strIngredient2}--{getMeal.data.strMeasure2}</h2>
                            <h2>{getMeal.data.strIngredient3}--{getMeal.data.strMeasure3}</h2>
                            <h2>{getMeal.data.strIngredient4}--{getMeal.data.strMeasure4}</h2>
                            <h2>{getMeal.data.strIngredient5}--{getMeal.data.strMeasure5}</h2>
                            <h2>{getMeal.data.strIngredient6}--{getMeal.data.strMeasure6}</h2>
                            <h2>{getMeal.data.strIngredient7}--{getMeal.data.strMeasure7}</h2>
                            <h2>{getMeal.data.strIngredient8}--{getMeal.data.strMeasure8}</h2>
                            <h2>{getMeal.data.strIngredient9}--{getMeal.data.strMeasure9}</h2>

                        </div>
            </div>  
        </>
    )
}
export default Mealitem;