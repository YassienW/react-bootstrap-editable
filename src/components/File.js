import React from "react"

export default function File({value, setNewValue, controls, label}){
    return (
        <React.Fragment>
            <div className="custom-file">
                <input type="file" className="custom-file-input mr-1"
                       onChange={e => setNewValue(e.target.files[0])}/>
                <label className="custom-file-label">{value? value.name: label}</label>
            </div>
            {controls}
        </React.Fragment>
    )
}
