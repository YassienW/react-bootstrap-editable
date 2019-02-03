import React from "react"
import {Col, Form, FormGroup, FormText, Input, Row} from "reactstrap";

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <Row form className="my-0">
                        <Col md={6}>
                            <FormGroup className="my-0">
                                <Input value={this.props.value? this.props.value.toISOString().slice(0, 10): ""}
                                       type="date" bsSize="sm"
                                       onChange={e => this.props.setNewValue(e.target.valueAsDate)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {this.props.controls}
                        </Col>
                    </Row>
                </Form>
                <FormText className="mt-0">{this.props.validationText}</FormText>
            </React.Fragment>
        )
    }
}
