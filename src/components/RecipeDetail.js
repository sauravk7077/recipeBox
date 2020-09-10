import React from "react";

function RecipeDetail(props) {
    let ing, name, dir;
    if(props.detail){
        ing = props.detail.ingredients.map(a=>(
            <div>{a}</div>
        ));
        name = props.detail.recipeName;
        dir = props.detail.directions.map(a=>(
            <div>{a}</div>
        ));
    }
   
    return (
        <div>
            <div className="ingredients">{ing}</div>
            <div className="directions">{dir}</div>
        </div>
    )
}

export default RecipeDetail;