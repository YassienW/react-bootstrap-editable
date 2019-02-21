import React from "react"
import {Col, Form, FormGroup, FormText, Input, Row} from "reactstrap";

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let date = this.props.value
        date = date.toISOString? date.toISOString().slice(0, 10): new window.Date(date).toISOString().slice(0, 10)
        return (
            <React.Fragment>
                <Form className={this.props.className}>
                    <Row form className="my-0">
                        <Col md={this.props.inputCol}>
                            <FormGroup className="my-0">
                                <Input value={date} type="date" bsSize="sm"
                                       onChange={e => this.props.setNewValue(e.target.valueAsDate)}/>
                            </FormGroup>
                        </Col>
                        <Col className="my-auto" md={this.props.controlsCol}>
                            {this.props.controls}
                        </Col>
                    </Row>
                    <FormText className="mt-0">{this.props.validationText}</FormText>
                </Form>
            </React.Fragment>
        )
    }
}
