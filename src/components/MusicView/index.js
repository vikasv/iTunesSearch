'use strict';

import React from 'react';
import SearchCategory from 'SearchCategory';
import MusicFilter from 'MusicFilter';
import ListView from 'ListView';
import ItemPagination from 'ItemPagination';
import axios from 'axios';
import _ from 'lodash';
import dataStore from 'src/utils/dataStore';
import {sortByCategory, sortByDate, filterByCategory} from 'src/utils/helpers';

class MusicView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            musicList: [],
            paginationLength: 0,
            filterList: []
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortCategory = this.handleSortCategory.bind(this);
        this.handleFilterCategory = this.handleFilterCategory.bind(this);
        this.handleSelectPage = this.handleSelectPage.bind(this);
    }

    componentDidMount(){
        // axios.get('search?term=jack&media=music')
        //     .then(response => this.setState({ musicList: response.data.results}))
        //     .catch(error => console.log(error));
    }

    handleSearch(value, category) {
        axios.get(`search?term=${value}&media=${category}&limit=200`)
            .then(response => {
                dataStore.setData('currentList', response.data.results)
                const musicList = response.data.results.slice(0,10);
                dataStore.setData('pageList', musicList);
                this.setState({musicList, paginationLength: Math.floor(response.data.results.length/10)});
                const genres = dataStore.getData('currentList').map(item => item.primaryGenreName);
                this.setState({filterList: _.uniq(genres)});
            })
            .catch(error => console.log(error));
    }

    handleSortCategory(key) {
        (key === 'releaseDate' ? sortByDate(this.state.musicList) : sortByCategory(this.state.musicList, key));
        this.setState({musicList: this.state.musicList});
    }

    handleSelectPage(pageNum) {
        const start = (pageNum - 1)*10;
        const filteredList = dataStore.getData('currentList').slice(start, start + 10);
        dataStore.setData('pageList', filteredList);
        this.setState({musicList: filteredList});
    }

    handleFilterCategory(categoryName, key) {
        const filteredList = filterByCategory(dataStore.getData('pageList'), categoryName, key)
        this.setState({musicList: filteredList});
    }

    render() {
        return (
            <div>
                <SearchCategory currentCategory={this.props.currentCategory} searchInput={this.handleSearch} />
                <MusicFilter filterList={this.state.filterList} handleSort={this.handleSortCategory} handleFilter={this.handleFilterCategory}/>
                {
                    this.state.musicList.length > 0 ?
                    <div>
                        <ListView showList={this.state.musicList} />
                        <ItemPagination paginationLength={this.state.paginationLength} handleSelectPage={this.handleSelectPage} />
                    </div> :
                        <h2>NO RESULTS FOUND!!!</h2>
                }
            </div>
        )
    }
}

export default MusicView;