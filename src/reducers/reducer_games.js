import {LIST_GAMES, REMOVE_GAME} from '../actions/games';

export default function (state = { list: [] }, action) {
    switch(action.type) {
        case LIST_GAMES:
            return Object.assign({}, state, { list: action.payload });
        case REMOVE_GAME:
            return Object.assign({}, state, {
                list: [ 
                    ...state.list.filter(game => game.name !== action.payload.gameName)
                ]
            })
        default:
            return state;
    }
};