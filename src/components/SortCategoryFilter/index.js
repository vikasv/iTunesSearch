'use strict';

import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

class SortCategoryFilter extends React.Component {

    constructor(props) {
        super(props);
        this.handleSortSelect = this.handleSortSelect.bind(this);
    }

    handleSortSelect(key) {
        this.props.sortByCategory(key);
    }

    render() {
        return (
            <SplitButton id="sortCatys" title="Sort By" bsStyle="default" onSelect={this.handleSortSelect}>
                <MenuItem eventKey="collectionName">Collection Name</MenuItem>
                <MenuItem eventKey="trackName">Track Name</MenuItem>
                <MenuItem eventKey="trackNumber">Track Number</MenuItem>
                <MenuItem eventKey="releaseDate">Release Date</MenuItem>
                <MenuItem eventKey="trackPrice">Track Price</MenuItem>
            </SplitButton>
        )
    }
}

export default SortCategoryFilter;