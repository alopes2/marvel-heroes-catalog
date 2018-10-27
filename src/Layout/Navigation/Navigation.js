import React from 'react';
import classes from './Navigation.module.scss';

import AppBar from '@material-ui/core/AppBar';

import { Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import {NavLink} from 'react-router-dom';



const navigation = () => (
    <AppBar position="sticky" >
        <Toolbar className={classes.toolbar}>
            <NavLink to="/" className={classes.title}>
                <Typography  variant="h6" color="inherit" noWrap>
                    Marvel Heroes Catalog
                </Typography>
            </NavLink>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className={ classes.searchInput   }
            />
          </div>
        </Toolbar>
    </AppBar>
);

export default navigation;