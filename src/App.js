import React from 'react';
import RecipeList from "./components/RecipeList";
import Dialog from "./components/Dialog";
import RecipeDetail from "./components/RecipeDetail";
import LocalStorage from "./components/LocalStorage";
import {recipes} from "./components/recipesData";


const LSM = new LocalStorage();
if (LSM.get('_myState') === null) {
    LSM.set({recipes: recipes, selected: 0});
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: LSM.get('_myState').recipes,
      selected: LSM.get('_myState').selected,
      dialog: false,
      ing: null,
      dirs: null,
      resName: null
    }
  }


  setLS = _=>{
    LSM.set({recipes: this.state.recipes, selected: this.state.selected});
  }

  deleteRecipe = i=>{
    const recipes = this.state.recipes.filter((e,j)=> i!==j);
    console.log(i);
    this.setState({
      recipes: recipes,
      selected: 0
    }, this.setLS)
  }

  createRecipe = _=>{

  }

  saveEditRecipe = i=>{
    
  }

  handleSelectItem = i=>{
    this.setState({
      selected: i
    }, this.setLS)
  }

  onChange = (e,name)=>{
    if(name=='ings') {
      this.setState({ings: e.target.value})
    }
  }


  render() {
    const recipes = this.state.recipes.map(e=> e.recipeName);
    return(
      <div className="App">
        <Dialog dirs={this.state.dirs} ings={this.state.ing} resName={this.state.recipes}/>
          <div className="header">Recipe Box</div>
          <div className="recipeContainer">
            <RecipeList onClick={this.handleSelectItem} names={recipes} selectValue={this.state.selected} delete={this.deleteRecipe}/>
            <RecipeDetail detail={this.state.recipes[this.state.selected]}/>
          </div>
      </div>
    )
  }
}

export default App;
