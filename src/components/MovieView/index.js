'use strict';

import React from 'react';
import SearchCategory from 'SearchCategory';

class MovieView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <SearchCategory currentCategory={this.props.currentCategory} />
            </div>
        )
    }
}

export default MovieView;