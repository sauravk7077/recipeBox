import React from 'react';
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      selected: 0
    }
  }

  handleSelectItem = i=>{
    this.setState({
      selected: i
    })
  }

  async componentDidMount() {
    const res = await fetch('./recipe.json');
    const ob = await res.json();
    const recipes = ob.recipes;
    this.setState(
      {recipes: recipes}
      );
  }

  render() {
    const recipes = this.state.recipes.map(e=> e.recipeName);
    return(
      <div className="App">
          <div className="header">Recipe Box</div>
          <div className="recipeContainer">
            <RecipeList onClick={this.handleSelectItem} names={recipes} selectValue={this.state.selected}/>
            <RecipeDetail detail={this.state.recipes[this.state.selected]}/>
          </div>
      </div>
    )
  }
}

export default App;
