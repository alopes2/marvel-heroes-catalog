import * as actions from './actionTypes';

const initialState = {
    heroesList: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_HEROES_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actions.FETCH_HEROES_SUCCESS:
            const result = [...action.heroesList];
            return {
                ...state,
                heroesList: result,
                loading: false
            };
        case actions.FETCH_HEROES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;