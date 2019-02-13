import React from "react"
import {Col, Form, FormGroup, FormText, Input, Row} from "reactstrap";

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Form className={this.props.className}>
                    <Row form className="my-0">
                        <Col md={this.props.inputCol}>
                            <FormGroup className="my-0">
                                <Input value={this.props.value? this.props.value.toISOString().slice(0, 10): ""}
                                       type="date" bsSize="sm"
                                       onChange={e => this.props.setNewValue(e.target.valueAsDate)} />
                            </FormGroup>
                        </Col>
                        <Col md={this.props.controlsCol}>
                            {this.props.controls}
                        </Col>
                    </Row>
                </Form>
                <FormText className="mt-0">{this.props.validationText}</FormText>
            </React.Fragment>
        )
    }
}
