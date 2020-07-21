import React from 'react'
import './App.css'

const BurgerPane = (props) => {
    let newBurger = props.burger.map((burgerPart, id) => <li key={id}> {burgerPart.name} </li>)
  // console.log(newBurger)
  return(
    <div className="burgerPane">
        <div class="burgerStackingArea">
            <span><h2>Burger Stacking Area</h2></span>
            <button type="reset" onClick={props.clear} ><strong>Make New Burger</strong></button>
        </div>
        <hr></hr>
        <div>
            <ul >
                {newBurger}
            </ul>
            <hr></hr>
        </div>  
    </div>
    
  )
}

export default BurgerPane