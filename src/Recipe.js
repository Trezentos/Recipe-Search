import style from './recipe.module.css'
import React from 'react'

const Recipe = ({title, image, ingredients}) =>{

    return (
        
        <div className = {style.recipe}>
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
            <img className={style.image} src={image} />
        </div>
    )

}

export default Recipe;