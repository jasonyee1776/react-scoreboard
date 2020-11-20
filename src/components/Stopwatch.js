import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    handleStopwatch = () => {
        this.setState( prevState => ({ 
            isRunning: !prevState.isRunning 
        }))
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() })
        }

    }

    /*
        React Lifecycle Methods (alos called Lifecycle Hooks)
            - Built-in methods that get called at each point in the life cycel
            - Act as Hooks that run code at key times in components life cycle
            - Give us the abilyt to control what ahppens when component mounts. updates, unmounts
    */

    // componentDidMount() gets called by React wehn component gets inserted our mounted onto DOM
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    // Anytime componentDidMount() is invoked it's important to also handle what should happen if the component were to unmount
    // Important to handle unmounted components as it could cause memory leaks

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime) 
            }))
        }
    }

    handleReset= () => {
        this.setState({ elapsedTime: 0 });
    }
    

    render() {
        const seconds = Math.floor(this.state.elapsedTime/1000);
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning ? "Stop" : "Start"}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    };
};

export default Stopwatch;