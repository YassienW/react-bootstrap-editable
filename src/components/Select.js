import React from "react"
import {Form, FormGroup, Input, Row, Col} from "reactstrap";

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
                <Form>
                    <Row form className="my-0">
                        <Col md={6}>
                            <FormGroup className="my-0">
                                <Input value={this.props.value} onChange={e => this.props.setNewValue(e.target.value)}
                                       type="select" bsSize="sm">{options}</Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {this.props.controls}
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        )
    }
}
