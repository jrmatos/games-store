import {LIST_GAMES} from '../actions/games';

export default function (state = { items: [] }, action) {
    switch(action.type) {
        case LIST_GAMES:
            return {
                        items: action.payload,
                        ...state
                    };
    }
    return state;
};