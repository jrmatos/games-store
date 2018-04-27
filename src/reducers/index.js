import {combineReducers} from 'redux';
import GameReducer from '../reducers/reducer_games';

const rootReducer = combineReducers({
    games: GameReducer
});

export default rootReducer;