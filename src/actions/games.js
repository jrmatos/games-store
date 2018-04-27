export const LIST_GAMES = 'LIST_GAMES';

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