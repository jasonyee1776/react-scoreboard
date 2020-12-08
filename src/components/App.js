import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Jason" ,
        score: 0,
        id: 1
      },
      {
        name: "Mason" ,
        score: 0,
        id: 2
      },
      {
        name: "Nason" ,
        score: 0,
        id: 3
      },
      {
        name: "Grayson" ,
        score: 0,
        id: 4
      },
       {
        name: "Kaison" ,
        score: 0,
        id: 5
      }
    ],
    title: 'Fooking Scoreboard'
  };

  prevPlayerId = 5;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));

  }

  handleAddNewPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [ 
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
  }

getHighScore = () => {
  const scores = this.state.players.map( p => p.score)
  const highScore = Math.max(...scores)
  if (highScore) {
    return highScore;
  }
  return null;
}

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players}
          title={this.state.title}
        />
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            score={player.score}
            changeScore={this.handleScoreChange}
            index={index}
            isHighScore={highScore === player.score}
            />
        )}
          <AddPlayerForm 
            addPlayer={this.handleAddNewPlayer}
          />

      </div>
    );
  }
}

export default App;