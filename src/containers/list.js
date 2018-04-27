import React, {Component} from 'react';
import ShowButton from './show-button';
import {connect} from 'react-redux';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {toggleGames: true};
    }
    render() {
        return (
            <div className='list-of-games'>
                <h1>List of games</h1>
                <ShowButton 
                    toggleGames={this.state.toggleGames}
                />
                <ul style={{ display: this.state.toggleGames ? 'block': 'none' }}>
                    {this.mapItems()}
                </ul>
            </div>
            
        );
    };

    mapItems() {
        return this.props.games.items.map((item, index) => {
            return (<li key={index}>{item.name} ({item.genre})</li>);
        })
    }
};

function mapStateToProps({games}) {
    return {games};
}

export default connect(mapStateToProps)(List);