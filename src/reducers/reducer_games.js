import {LIST_GAMES} from '../actions/games';

export default function (state = { list: [] }, action) {
    console.log("reducer games...")
    switch(action.type) {
        case LIST_GAMES:
        return Object.assign({}, state, { list: action.payload });
    }
    return state;
};