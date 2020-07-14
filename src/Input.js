import React from "react";

export default function Input({className, children, type, value, invalid, onChange}){
    let baseClassName = "form-control-sm form-control ";

    if(invalid){
        baseClassName += "is-invalid ";
    }
    if(className){
        baseClassName += className;
    }

    if(type === "select"){
        return (
            <select className={baseClassName} value={value} onChange={(e) => onChange(e.target.value)}>
                {children}
            </select>
        )
    }
    if(type === "textarea"){
        return (
            <textarea className={baseClassName} value={value} onChange={(e) => onChange(e.target.value)}/>
        )
    }
    return (
        <input className={baseClassName} autoFocus type={type} value={value} onChange={(e) => onChange(e.target.value, e)}/>
    );
}