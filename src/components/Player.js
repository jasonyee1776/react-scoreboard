import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {

  static propTypes = {
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    const { 
      removePlayer,
      name,
      score,
      changeScore,
      isHighScore,
      index
    } = this.props
    
    return(
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Crown 
            isHighScore={isHighScore}
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
      