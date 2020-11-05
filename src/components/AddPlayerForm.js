import React, { Component } from 'react'

/* 
    In order to get the value from a React Form element we must create a "Controlled Input"
*/

class AddPlayerForm extends Component {
    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value})
    }

    render() {
        console.log(this.state.value)
        return (
            <form>
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