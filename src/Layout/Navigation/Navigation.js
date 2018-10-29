import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Navigation.module.scss';

import AppBar from '@material-ui/core/AppBar';

import { Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import {NavLink} from 'react-router-dom';

import * as actions from '../../store/actions';



class Navigation extends Component {
    state = {
        searchInput: ''
    };

    inputChangeHandler = (event) => {
        this.setState({searchInput: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        // this.props.history.push("/?search=" + this.state.searchInput);
        this.props.onFetchHeroes(this.state.searchInput);
    }

    render () {
        return (
            <AppBar position="sticky" >
                <Toolbar className={classes.toolbar}>
                    <NavLink to="/" className={classes.title}>
                        <Typography  variant="h6" color="inherit" noWrap>
                            Marvel Heroes Catalog
                        </Typography>
                    </NavLink>
                  <form onSubmit={this.onSubmit} className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        className={ classes.searchInput   }
                        name="search"
                        onChange={this.inputChangeHandler}
                        value={this.state.searchInput}
                    />
                  </form>
                </Toolbar>
            </AppBar>
        );
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchHeroes: term => dispatch(actions.fetchHeroes(term))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Navigation));