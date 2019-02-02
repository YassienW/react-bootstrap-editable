import React from "react"
import {Form, FormGroup, FormText, Input} from "reactstrap";

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Form inline>
                    <FormGroup>
                        <Input value={this.props.value? this.props.value.toISOString().slice(0, 10): ""} type="date" bsSize="sm"
                               onChange={e => this.props.setNewValue(e.target.valueAsDate)} />
                    </FormGroup>
                    {this.props.controls}
                </Form>
                <FormText className="mt-0">{this.props.validationText}</FormText>
            </React.Fragment>
        )
    }
}
