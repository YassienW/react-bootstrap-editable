import React from "react"
import {Input} from "reactstrap";

export default function TextField({validationText, value, setNewValue, controls}){
    return (
        <React.Fragment>
            <Input invalid={!!validationText} autoFocus value={value? value : ""}
                   onChange={e => setNewValue(e.target.value)} type="text" bsSize="sm" className="mr-1"/>
            {controls}
        </React.Fragment>
    )
}
