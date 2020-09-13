import React from "react";

function RecipeDetail(props) {
    let ing, dir;
    if(props.detail){
        ing = props.detail.ingredients.map((a,i)=>(
            <li key={i}>{a}</li>
        ));
        dir = props.detail.directions.map((a,i)=>(
            <li key={i}>{a}</li>
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