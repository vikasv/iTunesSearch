'use strict';

import React from 'react';
import {Pagination, Row} from 'react-bootstrap';

class ItemPagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.handleSelectPage = this.handleSelectPage.bind(this);
    }

    handleSelectPage(pageNum) {
        this.setState({activePage: pageNum});
        this.props.handleSelectPage(pageNum);
    }

    render() {
        return (
            <Row>
                <Pagination first last prev next bsSize="large" items={this.props.paginationLength} activePage={this.state.activePage}
                    onSelect={this.handleSelectPage} />
            </Row>
        )
    }
}

export default ItemPagination;