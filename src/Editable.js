import React from "react"
import PropTypes from "prop-types";
import TextField from "./components/TextField";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import Date from "./components/Date";
import {Button, Form, PopoverHeader, PopoverBody, Popover, Spinner, FormText} from "reactstrap";
import File from "./components/File";

const fontAwesomeStyle = {
    textAlign: "center",
    width: "1.25em",
    height: "1em",
    fill: "white",
    verticalAlign: "-0.25em"
};

export default class Editable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: this.props.initialValue,
            newValue: this.props.initialValue,
            isEditing: false,
            validationText: null,
            isLoading: false,
        };
        //used for popover mode
        this.clickableLink = React.createRef();
    }
    componentDidMount() {
        if(this.props.ajax && !this.props.validate && !this.props.disabled){
            console.error(`Editable(${this.props.id}): You provided an ajax prop without a validate prop;
            ajax function will not be called`)
        }
    }
    componentDidUpdate(prevProps, prevState){
        //update initial value if the prop got updated
        if(prevProps.initialValue !== this.props.initialValue){
            this.setState({value: this.props.initialValue, newValue: this.props.initialValue})
        }
    }
    getEditingComponent(){
        let confirmButton = (
            <Button className="ml-auto mr-1" color="success" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={fontAwesomeStyle}>
                    <path color="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
                </svg>
            </Button>
        );
        let cancelButton = (
            <Button color="danger" size="sm" onClick={() => this.onCancel()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" style={fontAwesomeStyle}>
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                </svg>
            </Button>
        );
        if(React.isValidElement(this.props.renderConfirmElement)){
            confirmButton = React.cloneElement(this.props.renderConfirmElement,
                {onClick: (e) => this.onFormSubmit(e)});
        }
        if(React.isValidElement(this.props.renderCancelElement)){
            cancelButton = React.cloneElement(this.props.renderCancelElement,
                {onClick: (e) => {e.preventDefault(); this.onCancel()}});
        }
        let controls = (
            <React.Fragment>
                {confirmButton}
                {cancelButton}
            </React.Fragment>
        );
        if(this.state.isLoading){
            controls = (
                <div className="my-auto mx-4">
                    <Spinner  style={{width: "1.5rem", height: "1.5rem"}}/>
                </div>)
        }
        let commonProps = {
            value: this.state.newValue,
            validationText: this.state.validationText,
            controls: controls,
            setNewValue: (newValue) => this.setState({newValue: newValue}),
            onCancel: () => this.onCancel()
        };
        let component;
        switch(this.props.type){
            case "textfield":
                component =  <TextField {...commonProps}/>;
                break;
            case "select":
                component = <Select {...commonProps} options={this.props.options}/>;
                break;
            case "date":
                component = <Date {...commonProps}/>;
                break;
            case "textarea":
                return (
                    <Form onSubmit={(e) => this.onFormSubmit(e)}>
                        <TextArea {...commonProps}/>
                        <div className="d-flex align-items-start">
                            <FormText className="mt-0">{this.state.validationText}</FormText>
                            {controls}
                        </div>
                    </Form>);
            case "file":
                component = <File {...commonProps} label={this.props.label}/>;
                break;
            default:
                console.error(`Editable(${this.props.id}): "${this.props.type}" is not a valid value for the "type" prop`)
                return null
        }
        return(
            <Form onSubmit={(e) => this.onFormSubmit(e)} className={this.props.className}>
                <div className="align-items-baseline d-flex">
                    {component}
                </div>
                <FormText className="mt-0">{this.state.validationText}</FormText>
            </Form>
        )
    }
    onFormSubmit(e){
        e.preventDefault()
        this.onSubmit(this.state.newValue)
    }
    onCancel(){
        //reset validation text AND new value, all back to initial
        this.setState({validationText: null, newValue:this.state.value, isEditing: false})
    }
    //validation happens here
    onSubmit(newValue){
        const validationText = this.props.validate? this.props.validate(newValue) : null

        //we always trigger this, as long as the prop is specified
        this.props.onSubmit? this.props.onSubmit(newValue) : null

        if(validationText){
            this.setState({validationText: validationText})
        }else{
            this.props.validate? this.onValidated(newValue) : this.setState({value: newValue, isEditing: false})
        }
    }
    onValidated(validValue){
        if(this.props.onValidated){
            this.props.onValidated(validValue)
        }else if(!this.props.ajax){
            console.error(`Editable(${this.props.id}): Specified a validate function without onValidated or ajax`)
        }

        if(this.props.ajax && validValue !== this.state.value){
            this.ajax(validValue)
        }else{
            this.setState({value: validValue, isEditing: false, validationText: null})
        }
    }
    ajax(validValue){
        this.setState({isLoading: true})
        let xhr = new XMLHttpRequest()
        //this will call the user's ajax function, allowing him to set up the xhr object however he wants
        this.props.ajax(xhr, validValue, this.props.id);
        //consume the user's on ready state change function to call it later before the editable's
        let onReadyStateChange = xhr.onreadystatechange? xhr.onreadystatechange : null
        xhr.onreadystatechange = () => {
            onReadyStateChange? onReadyStateChange() : null;
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    this.setState({isLoading: false, isEditing: false, value: validValue, validationText: null})
                }else{
                    this.setState({isLoading: false, validationText: `Ajax Response ${xhr.status} Error`})
                }
            }
        }
    }
    render(){
        if((this.state.isEditing || this.props.alwaysEditing) && this.props.mode === "inline"){
            return(this.getEditingComponent())
        }else{
            let value = this.state.value? this.state.value: "No value"
            //format date objects for display, might add a custom format function here later
            value = this.props.type === "date" && this.state.value? new window.Date(this.state.value).toUTCString().slice(5, 16) : value
            value = this.props.type === "file" && this.state.value? this.state.value.name : value

            let p = "", a = "";
            if(this.props.isValueClickable){
                if(this.props.disabled){
                    p = value
                }else{
                    a = value
                }
            }else{
                p = value
                a = this.props.disabled? a : this.props.editText
            }
            //add label if applicable
            p = this.props.label? `${this.props.label}: ${p}` : p;
            let popover = this.props.mode === "popover"?(
                <Popover isOpen={this.state.isEditing} placement={this.props.placement}
                         target={this.clickableLink}>
                    <PopoverHeader>{this.props.label}</PopoverHeader>
                    <PopoverBody>{this.getEditingComponent()}</PopoverBody>
                </Popover>
            ) : null;

            return(
                <Form onSubmit={(e) => this.onFormSubmit(e)} className={this.props.className} inline>
                    {p && this.props.showText && <p className="my-0" style={{"whiteSpace": "pre-wrap"}}>{p}</p>}
                    {a && <a ref={this.clickableLink} className="ml-1 mt-auto" href="#"
                             onClick={(e) => {e.preventDefault(); this.setState({isEditing: true})}}>{a}</a>}
                    {popover}
                </Form>
            )
        }
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
