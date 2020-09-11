import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit} from "@fortawesome/free-solid-svg-icons";

function RecipeList(props) {
    const names = props.names.map((e,i)=>(
        <div className="select">
        <div className={(i==props.selectValue?' selected':'')} key={i} onClick={_=>props.onClick(i)}>
            {e}
        </div>
        <button className={'btn' + (i==props.selectValue?' show':'')} onClick={_=>props.delete(i)}><FontAwesomeIcon icon={faTrashAlt}/></button>
        <button className={'btn' + (i==props.selectValue?' show':'')} onClick={_=>props.delete(i)}><FontAwesomeIcon icon={faEdit}/></button>
        </div>
    ))
    return(
        <div className="selectBox">{names}</div>
    )
}

export default RecipeList;