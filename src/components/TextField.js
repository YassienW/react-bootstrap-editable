import React from "react"
import Input from "../Input"

export default function TextField({validationText, value, setNewValue, controls}){

    return (
        <React.Fragment>
            <Input className="mr-1" type="text" value={value? value : ""} onChange={setNewValue}
                   invalid={!!validationText}/>
            {controls}
        </React.Fragment>
    )
}
