import React from "react"
import {Input} from "reactstrap";

export default function({validationText, value, setNewValue}){
    return (
        <React.Fragment>
            <Input invalid={!!validationText} autoFocus value={value? value : ""}
                   onChange={e => setNewValue(e.target.value)} type="textarea" className="mb-1"/>
        </React.Fragment>
    )
}
