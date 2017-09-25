'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Row, Col, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';

class SearchCategory extends React.Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        const inputVal = ReactDOM.findDOMNode(this.formControl).value;
        const category = this.props.currentCategory;
        this.props.searchInput(inputVal, category);
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl ref={input => this.formControl = input} bsSize="large" type="text" placeholder="Search..."/>
                            <InputGroup.Button>
                                <Button bsSize="large" bsStyle="primary" onClick={this.handleButtonClick}>
                                    {this.props.currentCategory.toUpperCase()}
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>
        )
    }
}

export default SearchCategory;