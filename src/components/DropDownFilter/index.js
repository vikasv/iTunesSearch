'use strict';

import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

class DropDownFilter extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        this.props.handleFilterCategory(key);
    }
    render() {
        return (
            <div>
                <SplitButton id="filter-music" title="Filter By" onSelect={this.handleSelect}>
                    {
                        this.props.filterList && this.props.filterList.map((item, i) => {
                            return <MenuItem eventKey={item} key={i}>{item}</MenuItem>
                        })
                    }
                </SplitButton>
            </div>
        )
    }
}

export default DropDownFilter;