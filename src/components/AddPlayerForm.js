import React, { Component } from 'react'

/* 
    - <form> and <input> elements on React act different than other elements
        - Naturally keep some internal state
    - In order to get the value from a React Form element we must create a "Controlled Input"
        - Element whose value is controlled by react with state
        1) Create state for "value" of <input> 
        2) Listen for changes on input to detect when value is updated
        3) Create event handler that updates the state (state of this particular class component's) 
*/

class AddPlayerForm extends Component {
    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.trim() == "") {
            alert('Input can not be empty.')
            return false;
        } else {
            this.props.addPlayer(this.state.value);
            this.setState({
            value: ''
        }
        )}
    }

    render() {
        console.log(this.state.value)
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