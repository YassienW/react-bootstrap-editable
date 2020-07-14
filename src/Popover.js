import React, {useState} from "react";
import ReactDOM from "react-dom";
import {usePopper} from "react-popper";

export default function Popover({isOpen, triggerElement, placement, children}){
    const [popperElement, setPopperElement] = useState(null);
    const {styles, state} = usePopper(triggerElement.current, popperElement, {placement});

    const popoverElement = (
        <div className="bs-popover-auto popover" ref={setPopperElement} style={styles.popper}
             x-placement={state?.placement}>
            <div className="arrow" data-popper-arrow style={styles.arrow}/>
            <div className="popover-inner" role="tooltip">
                <h3 className="popover-header">{children[0]}</h3>
                <div className="popover-body">
                    {children[1]}
                </div>
            </div>
        </div>
    )

    if(isOpen){
        return ReactDOM.createPortal(popoverElement, document.getElementsByTagName("body")[0]);
    }
    return null;
}