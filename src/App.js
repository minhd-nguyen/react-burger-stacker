import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';

class App extends Component{
  state = {
    ingredients: this.props.ingredients,
    stack: []
  }

  handleClick = (e, id) => {
    console.log(e.target.name)
    const stackCopy = [...this.state.stack]
    stackCopy.unshift(this.state.ingredients[id])
    this.setState({
      stack: stackCopy
    })
  }

  handleClear = (e) => {
    console.log("does this work?")
    this.setState({
      stack: []
    })
  }

  render(){
    return(
      <div className="App">
        <div class="menu">
          <IngredientList allIngredients={this.state.ingredients} moveIngredient={this.handleClick} />
        </div>
        <div class="stack">
          <BurgerPane  burger={this.state.stack} clear={this.handleClear} />
        </div> 
      </div>
    )
  }
}

export default App;
