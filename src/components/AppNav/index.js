'use strict';

import React from 'react';
import {Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';
import update from 'immutability-helper';

class AppNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ismusic: true,
        }
        this.handleMenuSelect = this.handleMenuSelect.bind(this);
    }

    handleMenuSelect(eventKey) {
        const state = {
            ismusic: false,
            ismovie: false,
            ispodcast: false,
            istvshow: false
        };
        const newState = update(state, {[`is${eventKey}`]:{$set: true}});
        this.setState(newState);
        this.props.handleNavSelect(eventKey);
    }

    render() {
        return (
            <Navbar onSelect={this.handleMenuSelect}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">iTunesSearch</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey="music" active={this.state.ismusic}>MUSIC</NavItem>
                    <NavItem eventKey="movie" active={this.state.ismovie}>MOVIE</NavItem>
                    <NavItem eventKey="podcast" active={this.state.ispodcast}>PODCAST</NavItem>
                    <NavItem eventKey="tvshow" active={this.state.istvshow}>TVSHOW</NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default AppNav;