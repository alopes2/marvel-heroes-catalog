import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import classes from './HeroCard.module.scss';

const heroCard = (props) => (
    <div className={classes.cardContainer} style={{textAlign: 'center'}}>
        <NavLink to={'/' + props.id}>
            <img className={classes.thumbnail} src={props.img} alt={props.name}/>
        </NavLink>
        <Typography color="textPrimary" variant="title">{props.name}</Typography>
    </div>
);

export default heroCard;