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

  // tracking player ID
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

  // Fucntion below adds new Players
  // Need to bring in previous Players object from App State and combine them with new Player object
  // Below example uses spread opperator    
  
/*
  - BEST PRACTICE TO UPDATE TO A NEW STATE USING PREVIOUS STATE TO ENSURE YOU ARE USING THE MOST UP TO DATE "STATE"
    - EX: state sometimes gets upated in batches and this might cause a delay in updating state 

  handleAddNewPlayer = (name) => {
    this.setState({
      players: [ 
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }
*/

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
/*
  handleHighScore = () => {
    // create function that will return the player id with the highest score
    // Still need to figure out how to handle players with tied scores?
    const numOfPlayers = this.state.players.length
    let highScorePlayerId = []
    let highScore = 0
    for(let i = 0;i<numOfPlayers;i++) {
      if(this.state.players[i].score <= 0) {
          break;
      } else if(this.state.players[i].score > highScore) {
          highScore = this.state.players[i].score
          highScorePlayerId = [this.state.players[i].id]
      }
    }
    console.log(highScorePlayerId)
    return highScorePlayerId;
  }
*/

getHighScore = () => {
  // create function that filters out player with highest score
  const scores = this.state.players.map( p => p.score)
  const highScore = Math.max(...scores)
  console.log(highScore)
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
        {/* Players list 
            map() has an optional buitl-in "index" parameter 
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
            // returns boolean value
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