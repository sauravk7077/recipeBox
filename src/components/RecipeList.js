import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

function RecipeList(props) {
    const names = props.names.map((e,i)=>(
        <div className="select">
        <div className={(i==props.selectValue?' selected':'')} key={i} onClick={_=>props.onClick(i)}>
            {e}
        </div>
        <button className={'btn' + (i==props.selectValue?' show':' hide')} onClick={_=>props.delete(i)}><FontAwesomeIcon icon={faTrashAlt}/></button>
        <button className={'btn' + (i==props.selectValue?' show':' hide')} onClick={_=>props.modify(i)}><FontAwesomeIcon icon={faEdit}/></button>
        </div>
    ))
    return(
        <div className="selectBox">
            {names}
            <div className="toolbar select">
                <button className="btn" onClick={props.create}><FontAwesomeIcon icon={faPlusSquare}/></button>
            </div>
        </div>
    )
}

export default RecipeList;