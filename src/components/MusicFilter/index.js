'use strict';

import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SortCategoryFilter from 'SortCategoryFilter';
import ButtonGroupFilter from 'ButtonGroupFilter';
import DropDownFilter from 'DropDownFilter';

class MusicFilter extends React.Component {

    constructor(props) {
        super(props);
        this.handleCategorySort = this.handleCategorySort.bind(this);
        this.handleFilterCategory = this.handleFilterCategory.bind(this);
    }

    handleCategorySort(key) {
        this.props.handleSort(key);
    }

    handleFilterCategory(key) {
        console.log(this.filterComp);
        this.props.handleFilter(this.filterComp.props.filterName, key);
    }

    render() {
        const filterOne = ['Streamable', 'Non Streamable'];

        return (
            <Row>
                <Col mdOffset={7} md={5}>
                    <div style={{display: 'inline-block', padding: 5}}>
                        { this.props.filterList.length>0 && <DropDownFilter ref={input => this.filterComp=input} filterName='primaryGenreName' filterList={this.props.filterList} handleFilterCategory={this.handleFilterCategory} /> }
                    </div>
                    <div style={{display: 'inline-block', padding: 5}}>
                        <ButtonGroupFilter attrs={filterOne}/>
                    </div>
                    <div style={{display: 'inline-block', padding: 5}}>
                        <SortCategoryFilter sortByCategory={this.handleCategorySort} />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MusicFilter;