import React, {PureComponent} from 'react';
import Counter from './Counter';
 
/*
  const Player = (this.props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          { this.props.name }
        </span>
  
        <Counter 
            score={this.props.score}
            changeScore={this.props.changeScore}
            index={this.props.index}
        />
      </div>
    );
  }

- React provides a special type of component, called PureComponent, that helps prevent unnecessary re-renders. 
- If your component’s render() method renders the same result given the same this.props and state, you can use PureComponent for a performance boost in some cases.
- Re-write Player component as a Pure Component

*/

class Player extends PureComponent {
  render() {
    console.log(this.props.name + " rendered")
    // destructure props with variable assignment
    const { 
      removePlayer,
      id,
      name,
      score,
      changeScore,
      index 
    } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          { this.props.name }
        </span>
  
        <Counter 
            score={this.props.score}
            changeScore={this.props.changeScore}
            index={this.props.index}
        />
      </div>
    );
  }
}

export default Player;
      