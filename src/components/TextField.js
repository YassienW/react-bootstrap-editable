import React from "react"
import {Form, FormGroup, Input, FormText} from "reactstrap";

export default class TextField extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
                <Form inline>
                    <FormGroup>
                        <Input invalid={!!this.props.validationText} value={this.props.value} onChange={e => this.props.setNewValue(e.target.value)}
                               type="text" bsSize="sm"/>
                        {/*<span className="fa-stack" style={{right: 35}}>
                              <i className="far fa-circle fa-xs fa-stack-1x"/>
                              <i className="fas fa-times fa-xs fa-stack-1x"/>
                        </span>*/}
                    </FormGroup>
                    {this.props.controls}
                </Form>
                <FormText className="mt-0">{this.props.validationText}</FormText>
            </React.Fragment>
        )
    }
}
