export const LIST_GAMES = 'LIST_GAMES';
export const REMOVE_GAME = 'REMOVE_GAME';
export const ADD_GAME = 'ADD_GAME';
export const UPDATE_GAME_NAME = 'UPDATE_GAME_NAME';

export const listGames = () => {
    return {
        type: LIST_GAMES,
        payload: [
            {
                id: 0,
                name: 'God Of War',
                genre: 'platform'
            },
            {
                id: 1,
                name: 'Subway',
                genre: 'runner'
            },
            {
                id: 2,
                name: 'Counter Strike: Global Offensive',
                genre: 'shooter'
            }
        ]
    }
};

export const removeGame = gameId => {
    return {
        type: REMOVE_GAME,
        payload: {gameId}
    }
};

export const addGame = newGame => {
    return {
        type: ADD_GAME,
        payload: newGame
    }
};

export const updateGameName = (gameId, newGameName, newGenreName) => {
    return {
        type: UPDATE_GAME_NAME,
        payload: {gameId, newGameName, newGenreName}
    }
}