import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.trim() == "") {
            alert('Input can not be empty.');
            return false;
        } else {
            this.props.addPlayer(this.state.value);
            this.setState({
                value: ''
            }
        )}
    }

    static propTypes = {
        addPlayer: PropTypes.func
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter Player's Name"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        )
    }
}

export default AddPlayerForm;