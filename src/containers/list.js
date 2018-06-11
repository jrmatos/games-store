import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeGame, listGames, updateGameName} from '../actions/games';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.updateGameName = this.updateGameName.bind(this);
    }

    componentDidMount() {
        this.props.listGames();
    }

    render() {
        return (
            <div className='list-of-games'>
                <h1>List of games</h1>
                <table style={{ 
                    display: this.props.games.list.length ? 'block': 'none' 
                }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapItems()}
                    </tbody>                    
                </table>
            </div>
        );
    };

    mapItems() {
        return this.props.games.list.map((game, index) => {
            return (<tr key={index}>
                        <td>
                            {game.name} ({game.id})
                        </td>
                        <td>
                            {game.genre}
                        </td>
                        <td>
                            <button onClick={() => this.updateGameName(game.id)}>update</button> 
                            <button onClick={this.props.removeGame.bind(this, game.id)}>remove</button>
                        </td>
                    </tr>);
        })
    }

    updateGameName(gameId) {
        const newGameName  = prompt(`what's the new game name?`);
        const newGenreName = prompt(`what's the new genre name?`);
        this.props.updateGameName(gameId, newGameName, newGenreName);
    }
};

function mapStateToProps({games}) {
    return {games};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeGame, listGames, updateGameName}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);