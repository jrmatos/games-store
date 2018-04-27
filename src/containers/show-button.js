import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {listGames} from '../actions/games';

class ShowButton extends Component{
    render() {
        return (
            <button onClick={this.toggleGamesClick.bind(this)}>
                { this.props.toggleGames ? 'Hide': 'Show'} games
            </button>
        )
    }
    toggleGamesClick() {
        this.props.listGames();
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({listGames}, dispatch);
}

export default connect(null, mapDispatchToProps)(ShowButton);