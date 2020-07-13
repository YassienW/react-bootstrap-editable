import React from "react"
import {Input} from "reactstrap";

export default function Date({value, setNewValue, controls}){
    let date = value
    if(date){
        date = date.toISOString? date.toISOString().slice(0, 10): new window.Date(date).toISOString().slice(0, 10)
    }
    return (
        <React.Fragment>
            <Input value={date? date : ""} type="date" bsSize="sm" className="mr-1"
                   onChange={e => setNewValue(e.target.valueAsDate)}/>
            {controls}
        </React.Fragment>
    )
}
