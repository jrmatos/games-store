import {LIST_GAMES, REMOVE_GAME, ADD_GAME, UPDATE_GAME_NAME} from '../actions/games';

let newGame = {};

export default function (state = { list: [] }, action) {
    switch(action.type) {
        case LIST_GAMES:
            return Object.assign({}, state, { list: action.payload });
        case REMOVE_GAME:
            console.log(action)
            return Object.assign({}, state, {
                list: [ 
                    ...state.list.filter(game => game.id !== action.payload.gameId)
                ]
            })
        case ADD_GAME:

            newGame = { ...action.payload, id: new Date().getTime() };

            return Object.assign({}, state, {
                list: [
                    ...state.list,
                    newGame
                ]
            })
        case UPDATE_GAME_NAME:

            newGame = {
                name: action.payload.newGameName,
                genre: action.payload.newGenreName,
                id: action.payload.gameId
            };

            return Object.assign({}, state, {
                list: updateObjectInArray(state.list, action.payload.gameId, newGame)
            })

        default:
            return state;
    }
}

function updateObjectInArray(array, id, newItem) {
    return array.map(item => {
        if(item.id !== id) {
            return item;
        }
        return {
            ...item,
            ...newItem
        };
    });
}