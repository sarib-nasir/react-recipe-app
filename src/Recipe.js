import React from "react";
import style from "./css/recipe.module.css";

function Recipe ({title,calories,image,ingredients}){
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} className={style.image} alt=""/>

        </div>
    );
} 
export default Recipe;