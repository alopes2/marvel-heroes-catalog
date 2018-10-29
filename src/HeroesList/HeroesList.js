import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import HeroCard from './HeroCard/HeroCard';

import * as actions from '../store/actions';
import classes from './HeroesList.module.scss';

class HeroesList extends Component {
    componentDidMount() {
        this.props.onFetchHeroes('');
    }

    render() {
        let heroesList = <LinearProgress color="secondary" />;
        let style = "";
        if (!this.props.loading) {
            heroesList = (
                    <Grid container >
                        {this.props.heroes.map(h => {
                            const img = `${h.thumbnail.path}.${h.thumbnail.extension}`;
                            return ( 
                                <Grid item key={h.id} xs={12} sm={6} md={4} style={{padding: '20px'}}>
                                    <HeroCard id={h.id} img={img} name={h.name}/>
                                </Grid>
                                );
                        })}
                    </Grid>
            )

            style = classes.list;
        }
        return (
            <div className={style}>
                {heroesList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        heroes: state.heroesList,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHeroes: term => dispatch(actions.fetchHeroes(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);