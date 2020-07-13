import React from "react"
import Input from "../Input"

export default function({validationText, value, setNewValue}){
    return (
        <React.Fragment>
            <Input className="mb-1" invalid={!!validationText} value={value? value : ""}
                   onChange={setNewValue} type="textarea"/>
        </React.Fragment>
    )
}
