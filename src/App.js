import React, {useState} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane'
import './App.css';

const menuList = 
    [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ]

function App(props) {

  const [ingredients, setIngredients] = useState(menuList)
  const [stack, setStack] = useState([])

  const handleClick=(e, id) => {
    console.log(e.target.name)
    const newStack = [...stack]
    newStack.unshift(ingredients[id])
    setStack(newStack)
  }

  const handleClear = (e) => {
    console.log("does this work?")
    setStack([])
  }
  
  return(
    <div className="App">
      <div class="menu">
        <IngredientList allIngredients={ingredients} moveIngredient={handleClick} />
      </div>
      <div class="stack">
        <BurgerPane  burger={stack} clear={handleClear} />
      </div> 
    </div>
  )
}

export default App;
