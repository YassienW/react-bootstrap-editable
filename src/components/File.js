import React from "react"
import {Col, Form, FormGroup, FormText, CustomInput, Input, Row} from "reactstrap";

export default class File extends React.Component {
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
                                <CustomInput className="form-control-sm"
                                       type="file" bsSize="sm" label={this.props.value? this.props.value.name: this.props.label}
                                       onChange={e => this.props.setNewValue(e.target.files[0])} />
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
