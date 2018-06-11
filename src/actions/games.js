export const LIST_GAMES = 'LIST_GAMES';
export const REMOVE_GAME = 'REMOVE_GAME';

export const listGames = () => {
    console.log('listGames')
    return {
        type: LIST_GAMES,
        payload: [
            {
                name: 'God Of War',
                genre: 'platform'
            },
            {
                name: 'Subway',
                genre: 'runner'
            },
            {
                name: 'Counter Strike: Global Offensive',
                genre: 'shooter'
            }
        ]
    }
};

export const removeGame = gameName => {
    return {
        type: REMOVE_GAME,
        payload: {gameName}
    }
};