import React from "react";

function RecipeDetail(props) {
    let ing, name, dir;
    if(props.detail){
        ing = props.detail.ingredients.map(a=>(
            <li>{a}</li>
        ));
        name = props.detail.recipeName;
        dir = props.detail.directions.map(a=>(
            <li>{a}</li>
        ));
    }
   
    return (
        <div className="recipeDetail">
            <div className="ingredients">
                <div className="head">Ingredients</div>
                <ul className="body">{ing}</ul>
            </div>
            <div className="directions">
                <div className="head">Directions</div>
                <ol className="body">{dir}</ol>
            </div>
        </div>
    )
}

export default RecipeDetail;