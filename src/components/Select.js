import React from "react"
import Input from "../Input"

export default function TextField({value, setNewValue, controls, options}){
    const selectOptions = options.map((value, index) => {
        return <option key={index + value}>{value}</option>
    })
    return (
        <React.Fragment>
            <Input value={value} onChange={setNewValue} type="select" className="mr-1">
                {selectOptions}
            </Input>
            {controls}
        </React.Fragment>
    )
}
