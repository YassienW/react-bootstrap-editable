import React, {useState, useEffect, useRef} from "react"
import PropTypes from "prop-types";
import TextField from "./components/TextField";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import Date from "./components/Date";
import Popover from "./Popover";
import File from "./components/File";

const fontAwesomeStyle = {
    textAlign: "center",
    width: "1.25em",
    height: "1em",
    fill: "white",
    verticalAlign: "-0.25em"
};

export default function Editable(props){
    const [value, setValue] = useState(props.initialValue);
    const [newValue, setNewValue] = useState(props.initialValue);
    const [isEditing, setIsEditing] = useState(false);
    const [validationText, setValidationText] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const clickableLink = useRef(null);

    useEffect(() => {
        if(props.ajax && !props.validate && !props.disabled){
            console.error(`Editable(${props.id}): You provided an ajax prop without a validate prop;
            ajax function will not be called`)
        }
    }, [])

    useEffect(() => {
        setValue(props.initialValue);
        setNewValue(props.initialValue);
    }, [props.initialValue])

    function getEditingComponent(){
        let confirmButton = (
            <button className="btn btn-success btn-sm ml-auto mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={fontAwesomeStyle}>
                    <path color="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
                </svg>
            </button>
        );
        let cancelButton = (
            <button className="btn btn-danger btn-sm" onClick={onCancel}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" style={fontAwesomeStyle}>
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                </svg>
            </button>
        );
        if(React.isValidElement(props.renderConfirmElement)){
            confirmButton = React.cloneElement(props.renderConfirmElement,
                {onClick: onFormSubmit});
        }
        if(React.isValidElement(props.renderCancelElement)){
            cancelButton = React.cloneElement(props.renderCancelElement,
                {onClick: (e) => {e.preventDefault(); onCancel()}});
        }
        let controls = (
            <React.Fragment>
                {confirmButton}
                {cancelButton}
            </React.Fragment>
        );
        if(isLoading){
            controls = (
                <div className="my-auto mx-4">
                    <div className="spinner-border" style={{width: "1.5rem", height: "1.5rem"}}/>
                </div>)
        }
        let commonProps = {
            value: newValue,
            validationText: validationText,
            controls: controls,
            setNewValue,
            onCancel
        };
        let component;
        switch(props.type){
            case "textfield":
                component =  <TextField {...commonProps}/>;
                break;
            case "select":
                component = <Select {...commonProps} options={props.options}/>;
                break;
            case "date":
                component = <Date {...commonProps}/>;
                break;
            case "textarea":
                return (
                    <form onSubmit={onFormSubmit}>
                        <TextArea {...commonProps}/>
                        <div className="d-flex align-items-start">
                            <small className="mt-0 form-text text-muted">{validationText}</small>
                            {controls}
                        </div>
                    </form>);
            case "file":
                component = <File {...commonProps} label={props.label}/>;
                break;
            default:
                console.error(`Editable(${props.id}): "${props.type}" is not a valid value for the "type" prop`)
                return null
        }
        return(
            <form onSubmit={onFormSubmit} className={props.className}>
                <div className="align-items-baseline d-flex">
                    {component}
                </div>
                <small className="mt-0 form-text text-muted">{validationText}</small>
            </form>
        )
    }
    function onFormSubmit(e){
        e.preventDefault()
        onSubmit(newValue)
    }
    function onCancel(){
        //reset validation text AND new value, all back to initial
        setValidationText(null);
        setNewValue(value);
        setIsEditing(false);
    }
    //validation happens here
    function onSubmit(newValue){
        const validationText = props.validate? props.validate(newValue) : null

        //we always trigger this, as long as the prop is specified
        props.onSubmit? props.onSubmit(newValue) : null

        if(validationText){
            setValidationText(validationText);
        }else{
            props.validate? onValidated(newValue) : (() => {
                setValue(newValue);
                setIsEditing(false);
            })()
        }
    }
    function onValidated(validValue){
        if(props.onValidated){
            props.onValidated(validValue)
        }else if(!props.ajax){
            console.error(`Editable(${props.id}): Specified a validate function without onValidated or ajax`)
        }

        if(props.ajax && validValue !== value){
            ajax(validValue)
        }else{
            setValue(validValue);
            setIsEditing(false);
            setValidationText(null);
        }
    }
    function ajax(validValue){
        setIsLoading(true);
        let xhr = new XMLHttpRequest()
        //this will call the user's ajax function, allowing him to set up the xhr object however he wants
        props.ajax(xhr, validValue, props.id);
        //consume the user's on ready state change function to call it later before the editable's
        let onReadyStateChange = xhr.onreadystatechange? xhr.onreadystatechange : null
        xhr.onreadystatechange = () => {
            onReadyStateChange? onReadyStateChange() : null;
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    setIsEditing(false);
                    setValue(validValue);
                    setValidationText(null);
                }else{
                    setValidationText(`Ajax Response ${xhr.status} Error`);
                }
                setIsLoading(false);
            }
        }
    }
    if((isEditing || props.alwaysEditing) && props.mode === "inline"){
        return(getEditingComponent())
    }else{
        let valueToRender = value? value: "No value";
        //format date objects for display, might add a custom format function here later
        valueToRender = props.type === "date" && value? new window.Date(value).toUTCString().slice(5, 16) : value
        valueToRender = props.type === "file" && value? value.name : valueToRender

        let p = "", a = "";
        if(props.isValueClickable){
            if(props.disabled){
                p = valueToRender
            }else{
                a = valueToRender
            }
        }else{
            p = valueToRender
            a = props.disabled? a : props.editText
        }
        //add label if applicable
        p = props.label? `${props.label}: ${p}` : p;
        let popover = props.mode === "popover"?(
            <Popover isOpen={isEditing} placement={props.placement} triggerElement={clickableLink}>
                {props.label}
                {getEditingComponent()}
            </Popover>
        ) : null;

        return(
            <form className={`form-inline ${props.className}`}>
                {p && props.showText && <p className="my-0" style={{"whiteSpace": "pre-wrap"}}>{p}</p>}
                {a && <a ref={clickableLink} className="ml-1 mt-auto" href="#"
                         onClick={(e) => {e.preventDefault(); setIsEditing(true)}}>{a}</a>}
                {popover}
            </form>
        )
    }
}
Editable.defaultProps = {
    type: "textfield",
    mode: "inline",
    alwaysEditing: false,
    className: null,
    initialValue: null,
    id: null,
    label: null,
    showText: true,
    disabled: false,
    isValueClickable: false,
    editText: "Edit",
    renderConfirmElement: null,
    renderCancelElement: null,
    //popover
    placement: "top",
    //functions
    validate: null,
    ajax: null,
    onSubmit: null,
    onValidated: null,
    //select props
    options: null
};
Editable.propTypes = {
    type: PropTypes.oneOf(["textfield", "textarea", "select", "date", "file"]).isRequired,
    mode: PropTypes.oneOf(["inline", "popover"]).isRequired,
    alwaysEditing: PropTypes.bool,
    className: PropTypes.string,
    initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    showText: PropTypes.bool,
    disabled: PropTypes.bool,
    isValueClickable: PropTypes.bool,
    editText: PropTypes.string,
    renderConfirmElement: PropTypes.element,
    renderCancelElement: PropTypes.element,
    /** Functions */
    validate: PropTypes.func,
    ajax: PropTypes.func,
    onSubmit: PropTypes.func,
    onValidated: PropTypes.func,
    /** Popover mode only */
    placement: PropTypes.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "right", "right-start",
        "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"]),
    /** Select only */
    options: PropTypes.array,
};
