import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addGame} from '../actions/games';

class AddForm extends Component{
    constructor(props) {
        super(props);
        this.initialState = { name: '', genre: '' };
        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="genre" placeholder="genre" value={this.state.genre} onChange={this.handleChange}/>
                <input type="submit" value="add"/>
            </form>
        );
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
         });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addGame(this.state);
        this.setState(this.initialState);                
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addGame}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddForm);