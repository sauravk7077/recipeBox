import React from "react";

function Dialog(props) {
    console.log(props);
    return (
        <div className="dialog">
            <div className="modal">
                <div>
                    <input
                      className="resName" 
                      placeholder="Enter recipe name" 
                      type="text" 
                      value={props.resName?props.resName: ''}/>
                </div>
                <div>
                    <textarea 
                      placeholder="Enter the ingredients in different lines"
                      className="ingInput"
                      value={props.resName?props.resName: ''}></textarea>
                </div>
                <div>
                    <textarea
                      placeholder="Enter the directions in different lines"
                      className="dirInput"
                      value={props.resName?props.resName: ''}></textarea>
                </div>
            </div>
        </div>
    )
}

export default Dialog;