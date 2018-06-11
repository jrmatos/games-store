import {combineReducers} from 'redux';
import GameReducer from '../reducers/games_reducer';

const rootReducer = combineReducers({
    games: GameReducer
});

export default rootReducer;