import React from "react"
import {Input} from "reactstrap";

export default function TextField({value, setNewValue, controls, options}){
    const selectOptions = options.map((value, index) => {
        return <option key={index + value}>{value}</option>
    })
    return (
        <React.Fragment>
            <Input value={value} onChange={e => setNewValue(e.target.value)}
                   type="select" bsSize="sm" className="mr-1">
                {selectOptions}
            </Input>
            {controls}
        </React.Fragment>
    )
}
