import React from 'react'
import RecipeList from './components/RecipeList'
import Dialog from './components/Dialog'
import RecipeDetail from './components/RecipeDetail'
import LocalStorage from './components/LocalStorage'
import { recipes } from './components/recipesData'

const LSM = new LocalStorage()
if (LSM.get('_myState') === null) {
  LSM.set({ recipes: recipes, selected: 0 })
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      recipes: LSM.get('_myState').recipes,
      selected: LSM.get('_myState').selected,
      dialog: false,
      ing: '',
      dirs: '',
      resName: '',
      new: true
    }
  }

  setLS = _ => {
    LSM.set({ recipes: this.state.recipes, selected: this.state.selected })
  }

  deleteRecipe = i => {
    const recipes = this.state.recipes.filter((e, j) => i !== j)
    this.setState({
      recipes: recipes,
      selected: 0
    }, this.setLS)
  }

  modifyRecipe = i => {
    this.setState(s => ({
      ing: s.recipes[s.selected].ingredients.join('\n'),
      resName: s.recipes[s.selected].recipeName,
      dirs: s.recipes[s.selected].directions.join('\n'),
      dialog: true,
      new: false
    }))
  }

  createRecipe = _ => {
    this.setState({
      ing: '',
      dirs: '',
      resName: '',
      new: true,
      dialog: true
    })
  }

  exit = _ => {
    this.setState({ dialog: false })
  }

  saveRecipe = _ => {
    const recipeName = this.state.resName
    const ingredients = this.state.ing.split(/[\n\r]+/g)
    const directions = this.state.dirs.split(/[\n\r]+/g)
    if (recipeName !== '') {
      this.setState(s => {
        let x
        if (s.new) { x = s.recipes.concat({ recipeName: recipeName, ingredients: ingredients, directions: directions }) } else {
          s.recipes[s.selected] = { recipeName: recipeName, ingredients: ingredients, directions: directions }
          x = s.recipes
        }
        return {
          recipes: x,
          dialog: false
        }
      }, this.setLS)
    } else { alert('Enter name') }
  }

  handleSelectItem = i => {
    this.setState({
      selected: i
    }, this.setLS)
  }

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value })
  }

  render () {
    const recipes = this.state.recipes.map(e => e.recipeName)
    return (
      <div className="App">
        <Dialog
          dialogShow={this.state.dialog}
          dirs={this.state.dirs}
          ings={this.state.ing}
          resName={this.state.resName}
          onChange={this.handleChange}
          save={this.saveRecipe}
          exit={this.exit}
          />
        <div className="header">Recipe Box</div>
        <div className="recipeContainer">
          <RecipeList
            onClick={this.handleSelectItem}
            names={recipes}
            selectValue={this.state.selected}
            delete={this.deleteRecipe}
            modify={this.modifyRecipe}
            create={this.createRecipe}
            />
          <RecipeDetail detail={this.state.recipes[this.state.selected]}/>
          </div>
        </div>
    )
  }
}

export default App
