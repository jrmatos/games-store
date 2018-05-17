import React, {Component} from 'react';
import ShowButton from './show-button';
import {connect} from 'react-redux';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='list-of-games'>
                <h1>List of games</h1>
                <ShowButton 
                    toggleGames={this.props.games.list.length}
                />
                <ul style={{ display: this.props.games.list.length ? 'block': 'none' }}>
                    {this.mapItems()}
                </ul>
            </div>
            
        );
    };

    mapItems() {
        return this.props.games.list.map((item, index) => {
            return (<li key={index}>{item.name} ({item.genre})</li>);
        })
    }
};

function mapStateToProps({games}) {
    return {games};
}

export default connect(mapStateToProps)(List);