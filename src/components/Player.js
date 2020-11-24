import React from 'react';
import Counter from './Counter';
 
/*
- React provides a special type of component, called PureComponent, that helps prevent unnecessary re-renders. 
- If your component’s render() method renders the same result given the same props and state, you can use PureComponent for a performance boost in some cases.
- Re-write Player component as a Pure Component

  const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
  
        <Counter 
            score={props.score}
            changeScore={props.changeScore}
            index={props.index}
        />
      </div>
    );
  }
*/

class Player extends PureComponent {
  render() {
    console.log(this.props.name + "rendered")
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
  
        <Counter 
            score={props.score}
            changeScore={props.changeScore}
            index={props.index}
        />
      </div>
    );
  }
}

export default Player;
      