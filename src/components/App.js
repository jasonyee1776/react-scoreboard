import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'

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
    title: 'Fooking Title'
  };

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

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title={this.state.title} 
          players={this.state.players}
        />
        {/* Players list 
            map() has an optional buitl-in "index" parameter 
            test
          */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            score={player.score}
            changeScore={this.handleScoreChange}
            index={index}   
          />
        )}
          <AddPlayerForm />

      </div>
    );
  }
}

export default App;