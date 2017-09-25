'use strict';

import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

class ButtonGroupFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            streamable: false,
            'non streamable': false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const val = event.target.textContent.toLowerCase();
        console.log(val);
        console.log(this);
        if (val === 'streamable') {
            this.setState({ [val]: true, 'non streamable': false });
        } else if (val === 'non streamable') {
            this.setState({ [val]: true, streamable: false });
        }
    }

    render() {
        return (
            <ButtonGroup>
                {
                    this.props.attrs.map((attr, i) => {
                        {this}
                        return (
                            <Button active={this.state[attr.toLowerCase()]} onClick={this.handleClick} key={i}>{attr}</Button>
                        )
                    })
                }
            </ButtonGroup>
        )
    }
}

export default ButtonGroupFilter;