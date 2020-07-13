import React from "react"
import {Input} from "reactstrap";

export default function Date({value, setNewValue, controls}){
    let date = value

    if(date){
        if(date.toISOString){
            date = date.toISOString().slice(0, 10)
        }else{
            try{
                date = new window.Date(date).toISOString().slice(0, 10)
            }catch(err){
                console.error(`Unable to parse provided date value to Date object: ${err.message}`)
            }
        }
    }

    return (
        <React.Fragment>
            <Input value={date? date : ""} type="date" bsSize="sm" className="mr-1"
                   onChange={e => setNewValue(e.target.valueAsDate)}/>
            {controls}
        </React.Fragment>
    )
}
