import React from 'react'


const IngredientList = props => {
    let mappedIngredients = props.allIngredients.map((ingredient, id) => 
      <li key={id}>{ingredient.name} <button id="btn" name={ingredient.name} onClick={(e) => props.moveIngredient(e, id)}> Pick </button></li>)
    return(
      <div className="ingredientList">
        <div><h2>Ingredient Menu:</h2></div>
        <div class="list">
            <ul>
              {mappedIngredients}
            </ul>
        </div>
        
      </div>
    )
  }

export default IngredientList;