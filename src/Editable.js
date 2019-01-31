import React from "react"
import PropTypes from "prop-types";
import TextField from "./components/TextField";
import {Button, Form} from "reactstrap";

export default class Editable extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value: this.props.value,
            newValue: this.props.value,
            isEditing: false,
            validationText: null,
            isLoading: false,
        }
    }
    getEditingComponent(){
        let controls = (
            <React.Fragment>
                <Button className="mx-1" color="success" size="sm" onClick={() => this.onSubmit()}>
                    <i className="fa fa-check fa-fw"/>
                </Button>
                <Button color="danger" size="sm" onClick={() => this.onCancel()}>
                    <i className="fa fa-times fa-fw"/>
                </Button>
            </React.Fragment>
        )
        if(this.state.isLoading){
            controls = (<p>Loading...</p>)
        }
        switch(this.props.type){
            case "textfield":
                return <TextField value={this.state.newValue} controls={controls}
                                  setNewValue={(newValue) => this.setState({newValue: newValue})}
                                  onSubmit={newValue => this.onSubmit(newValue)}
                                  onCancel={() => this.onCancel()}
                                  validationText={this.state.validationText}/>
            case "textarea":
                return null
            case "select":
                return null
            case "date":
                return null
            default:
                console.error(`"Editable: "${this.props.type}" is not a valid value for the type prop`)
                return null
        }
    }
    onCancel(){
        //reset validation text AND new value, all back to initial
        this.setState({validationText: null, newValue:this.state.value, isEditing: false})
    }
    onSubmit(){
        const validationText = this.props.validate? this.props.validate(this.state.newValue) : null

        //we always trigger this
        this.props.onSubmit? this.props.onSubmit(this.state.newValue) : null

        if(validationText){
            this.setState({validationText: validationText})
        }else{
            this.props.validate? this.onValidated(this.state.newValue) : this.setState({value: this.state.newValue, isEditing: false})
        }
    }
    onValidated(validValue){
        this.props.onValidated? this.props.onValidated(validValue):
            console.warn("Editable: Specified a validate function without onValidated, possible error")
        if(this.ajax){

        }else{

        }
        this.setState({value: validValue, isEditing: false, validationText: null})
    }
    render(){
        const value = this.state.value? this.state.value: "No value"

        if(this.state.isEditing){
            return(this.getEditingComponent())
        }else{
            return(
                <Form inline>
                    {!this.props.isValueClickable && <h6 className="my-0 mr-1">{value}</h6>}
                    <a href="javascript:;" onClick={() => {this.setState({isEditing: true})}}>
                        {this.props.isValueClickable? value : this.props.edit}
                    </a>
                </Form>
            )
        }
    }
}
Editable.defaultProps = {
    type: null,
    mode: null,
    value: null,
    disabled: false,
    isValueClickable: false,
    edit: "Edit",
    validate: null,
    onSubmit: null,
    onValidated: null,
}
Editable.propTypes = {
    type: PropTypes.oneOf(["textfield", "textarea", "select", "date"]).isRequired,
    mode: PropTypes.oneOf(["inline", "popup"]).isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    isValueClickable: PropTypes.bool,
    edit: PropTypes.string,
    validate: PropTypes.func,
    onSubmit: PropTypes.func,
    onValidated: PropTypes.func,
}
