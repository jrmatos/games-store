import React, {Component} from 'react';
import ShowButton from './show-button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeGame} from '../actions/games';

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
        return this.props.games.list.map((item, index) => {
            return (<tr key={index}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.genre}
                        </td>
                        <td>
                            <button onClick={this.props.removeGame.bind(this, item.name)}>remove</button>
                        </td>
                    </tr>);
        })
    }
};

function mapStateToProps({games}) {
    return {games};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);