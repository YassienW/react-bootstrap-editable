import React from "react"
import {CustomInput} from "reactstrap";

export default function File({value, setNewValue, controls, label}){
    return (
        <React.Fragment>
            <CustomInput className="form-control-sm mr-1" type="file" bsSize="sm" label={value? value.name: label}
                         onChange={e => setNewValue(e.target.files[0])}/>
            {controls}
        </React.Fragment>
    )
}
