import React from "react";

function Dialog(props) {
    return (
        <div className={'dialog' + (props.dialogShow?' show':'')}>
            <div className="modal">
                <div>
                    <input
                      className="resName" 
                      placeholder="Enter recipe name" 
                      type="text" 
                      value={props.resName}
                      onChange={e=>props.onChange(e, 'resName')}/>
                </div>
                <div>
                    <textarea 
                      placeholder="Enter the ingredients in different lines"
                      className="ingInput"
                      value={props.ings}
                      onChange={e=>props.onChange(e, 'ing')}></textarea>
                </div>
                <div>
                    <textarea
                      placeholder="Enter the directions in different lines"
                      className="dirInput"
                      value={props.dirs}
                      onChange={e=>props.onChange(e, 'dirs')}></textarea>
                </div>
                <div>
                    <button className="btn" onClick={props.save}>Save</button>
                    <button className="btn" onClick={props.exit}>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;