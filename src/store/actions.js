import * as actions from './actionTypes';

export const fetchHeroesStart = () => {
    return {
        type: actions.FETCH_HEROES_START
    };
}

export const fetchHeroesSuccess = (heroesList) => {
    return {
        type: actions.FETCH_HEROES_SUCCESS,
        heroesList: heroesList
    };
}

export const fetchHeroesFailed = (error) => {
    return {
        type: actions.FETCH_HEROES_FAILED,
        error: error
    };
}

export const fetchHeroes = (term) => {
    return async dispatch => {
        dispatch(fetchHeroesStart());
        const nameStartsWith = term ? `nameStartsWith=${term}&` : ''
        const fullResponse = await fetch(`https://gateway.marvel.com:443/v1/public/characters?${nameStartsWith}limit=100&apikey=d8d8ce52b720254562a2abd11f684b8a`);
        const response = await fullResponse.json();
        if (fullResponse.ok) {
            dispatch(fetchHeroesSuccess(response.data.results))
        } else {
            dispatch(fetchHeroesFailed(fullResponse.status))
        } 
    }
}