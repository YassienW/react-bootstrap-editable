import React from "react"
import {Col, Form, FormGroup, Input, FormText, Row} from "reactstrap";

export default class TextField extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
                <Form>
                    <Row form className="my-0">
                        <Col md={6}>
                            <FormGroup className="my-0">
                                <Input invalid={!!this.props.validationText}
                                       value={this.props.value? this.props.value : ""}
                                       onChange={e => this.props.setNewValue(e.target.value)}
                                       type="text" bsSize="sm"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {this.props.controls}
                        </Col>
                    </Row>
                    {/*<span className="fa-stack" style={{right: 35}}>
                          <i className="far fa-circle fa-xs fa-stack-1x"/>
                          <i className="fas fa-times fa-xs fa-stack-1x"/>
                    </span>*/}
                </Form>
                <FormText className="mt-0">{this.props.validationText}</FormText>
            </React.Fragment>
        )
    }
}
