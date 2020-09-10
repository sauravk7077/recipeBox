import React from "react";

function RecipeList(props) {
    const names = props.names.map((e,i)=>(
        <button className={"btn" + (i==props.selectValue?' selected':'')} key={i} onClick={_=>props.onClick(i)}>{e}</button>
    ))
    return(
        <div className="selectBox">{names}</div>
    )
}

export default RecipeList;