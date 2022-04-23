import React, { useState } from "react";
import Mealitem from "./MealItem";
import './style.css';
const Meal = () => {
    const[Mymeal,setMeal]=useState();
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`).then(res=>res.json()).then(data=> {setMeal(data.meals);})
        
    
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Food Recipe</h1>
                    <h4>Come join us!</h4>
                </div>
                <div className="container">
                {   
                  
                  (Mymeal==null)? <p className="notSearch">Not found</p> : 
                       Mymeal.map((res)=>{
                           return(
                          <Mealitem data={res}/>)} 
                   
                  ) 
                 
                 }
                </div>
            </div>
        </>
    )
}
export default Meal;