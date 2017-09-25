'use strict';

import React from 'react';
import {Grid} from 'react-bootstrap';
import axios from 'axios';
import AppNav from 'AppNav';
import MusicView from 'MusicView';
import MovieView from 'MovieView';
import PodcastView from 'PodcastView';
import TvShowView from 'TvShowView';

class AppView extends React.Component {

    constructor(props) {
        super(props);
        axios.defaults.baseURL = 'https://itunes.apple.com';
        this.state = {
            showView: 'music'
        }
        this.handleNavSelect = this.handleNavSelect.bind(this);
    }

    handleNavSelect(categoryType) {
        this.setState({ showView: categoryType });
    }

    render() {
        const Views = {
            'music': MusicView,
            'movie': MovieView,
            'podcast': PodcastView,
            'tvshow': TvShowView
        };
        const otherCategories = Object.keys(Views).filter(view => view !== this.state.showView );
        const CategoryView = Views[this.state.showView];
        return (
            <Grid>
                <AppNav handleNavSelect={this.handleNavSelect} />
                <CategoryView currentCategory={this.state.showView} otherCategories={otherCategories} />
            </Grid>
        )
    }
}

export default AppView;