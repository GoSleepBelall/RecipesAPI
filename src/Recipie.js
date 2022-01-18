 import React from "react";
 import style from './recipe.module.css'

 const Recipes = ({title, calories, image, ingredients})=>{
     return(
        <div className={style.recipe}>
            <h1>{title} </h1>
            <p>{calories}</p>
            <img className={style.image} src={image}></img>
            <ul className={style.container}>
                {ingredients.map(ingredients => (
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ul>
        </div>
     );
 }

 export default Recipes;