import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import HeroCard from './HeroCard/HeroCard';

import classes from './HeroesList.module.scss';


class HeroesList extends Component {
    state = {
        heroes: [],
        loading: true
    };
    componentDidMount() {
        fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=d8d8ce52b720254562a2abd11f684b8a')
            .then(async r => {
                const response = await r.json();
                const data = response.data.results;
                console.log(data);
                this.setState({
                    heroes: data,
                    loading: false
                });
            });
    }

    render() {
        let heroesList = <LinearProgress />;
        let style = "";
        if (!this.state.loading) {
            heroesList = (
                    <Grid container >
                        {this.state.heroes.map(h => {
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

export default HeroesList;