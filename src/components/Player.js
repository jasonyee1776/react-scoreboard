import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';
 
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
  // PropTypes for Class Components can be defined within Class component before the render() method using the "static" declaration
  // Using "static" means we do not have to instantiate the Class Component

  static propTypes = {
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func,
    index: PropTypes.number,
    handleHighScore: PropTypes.func,
    highscore: PropTypes.number,
    players: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number,
      id: PropTypes.number
    }))
  };

  render() {
    // destructure props with variable assignment
    const { 
      removePlayer,
      id,
      name,
      score,
      changeScore,
      index,
      handleHighScore,
      players,
      highscore
    } = this.props
    console.log(name + " rendered")
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Crown 
            score={score}
            handleHighScore={handleHighScore}
            players={players}
            id={id}
            highscore={highscore}
          />
          { name }
        </span>
  
        <Counter 
            score={score}
            changeScore={changeScore}
            index={index}
        />
      </div>
    );
  }
}

export default Player;
      