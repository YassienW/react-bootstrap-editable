import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class TextField extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const options = this.props.options.map((value, index) => {
            return <option key={index + value}>{value}</option>
        })
        return (
            <React.Fragment>
                <Form inline>
                    <FormGroup>
                        <Input value={this.props.value} onChange={e => this.props.setNewValue(e.target.value)}
                               type="select" bsSize="sm">{options}</Input>
                    </FormGroup>
                    {this.props.controls}
                </Form>
            </React.Fragment>
        )
    }
}
